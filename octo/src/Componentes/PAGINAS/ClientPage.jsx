import React, { useState, useEffect } from "react";
import '../CompCss/ClientPage.css'

export default function FuncClientePage() {
    const url = `http://localhost/OctoCore_API/endpoints/`;
    const [endpoint, setEndpoint] = useState("order/order");
    const [ID, setID] = useState("");
    const [activeSection, setActiveSection] = useState("dados"); // Inicializa com 'dados'
    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
    const [IMGatual,setIMGatual]= useState(token['linkPFP'])
    const [LinkPic,setLinkPic]= useState('')
    const [createAddres,setcreateAddress] = useState(false)
    const [createCard, setcreateCard] = useState(false)
    const [formDataAddress, setFormDataAddress] = useState({
      nome: '',
      rua: '',
      cep: '',
      complemento: '',
    });
    const [formDataCard, setFormDataCard] = useState({
    numeroCC: '',
    cvv: '',
    validade:'', 
    });




    // Mapeamento de seções para endpoints
    const sectionToEndpoint = {
        dados: "users/auth",
        pedidos: "order/order",
        endereco: "users/endereco",
        ticket: "users/ticket",
        pagamento: "users/cc",
        config: "users/config",
    };

    function Deletar(idaddress){
      handleDelete(endpoint, idaddress)
    }

    async function handleDelete(endpoint,ID){
      let payload
      if(endpoint === 'users/endereco'){
      payload = {
        idEndereco: ID
      }
      }
      else if(endpoint === 'users/cc'){
        payload = {
          IDCC: ID
        }
      }
      const response = await fetch(`${url}${endpoint}.php`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),

      })
      if(response.ok){
        alert("Deu bom")
      }
      else{
        alert("Deu ruim")
      }
  }


    
  async function AddAdress({ nome, rua, cep, complemento }) {
    const payload = {
      nome,
      rua,
      cep,
      complemento,
      idUsuario: token['idUsuario'],
    };
      try {
        const resposta = await fetch ("http://localhost/octocore_api/endpoints/users/endereco.php",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload)
        });
        if(!resposta){
          throw new Error (`erro na requisição: ${resposta.status}- ${resposta.statusText}`);
        }else{
          alert("deu certo")
        }

      } catch (error){
        alert("Erro:", error);
      }
    }


    function adicionarAdress(event)
    {
      event.preventDefault();
      AddAdress(formDataAddress);
    }
    function handleAddress (){
      setcreateAddress(!createAddres)
    }



    // SEÇÂO DE CARTAO
    async function AddCard({ numeroCC,cvv, validade }) {
      const payload = {
        numeroCC,
        cvv,
        validade,
        idUsuario: token['idUsuario'],
      };
        try {
          const resposta = await fetch (`http://localhost/octocore_api/endpoints/users/cc.php/?user=${token['idUsuario']}`,{
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          });
          if(!resposta){
            throw new Error (`erro na requisição: ${resposta.status}- ${resposta.statusText}`);
          }else{
            alert("deu certo")
          }
  
        } catch (error){
          alert("Erro:", error);
        }
      }
      

      function adicionarCartão(event)
      {
        event.preventDefault();
        AddCard(formDataCard);
      }
      function handleCard (){
        setcreateCard(!createCard)
      }


      // SEÇÂO DE EDIÇÂO DE FOTO
    async function handleEdit() {
      const payload = {
          idUsuario: token['idUsuario'],
          linkPFP: LinkPic,
      };
  
      try {
          const response = await fetch("http://localhost/octocore_api/endpoints/users/picture.php", {
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
                  // Inclua "Authorization" se necessário
                  // "Authorization": `Bearer ${token}`,
              },
              body: JSON.stringify(payload),
          });
  
          if (!response.ok) {
              // Lança erro se a resposta não estiver OK (ex.: 404, 500)
              throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
          }
          setIMGatual(LinkPic)    
          token.linkPFP = LinkPic
          localStorage.setItem("token", JSON.stringify(token));
     
        

      } catch (error) {
          console.error("Erro:", error.message);
      }
  }
    const Pulldata = async (id, endpoint) => {
        try {
            const resposta = await fetch(`${url}${endpoint}.php?user=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!resposta.ok) {
                throw new Error("Erro na requisição");
            }

            const data = await resposta.json();
            console.log(data);
            setID(data); // Atualiza o estado com os dados recebidos
        } catch (error) {
            console.error("Erro:", error.message);
        }
    };

    // useEffect apenas para monitorar mudanças no token e endpoint
    useEffect(() => {
        if (token && token["idUsuario"] ) {
            Pulldata(token["idUsuario"], endpoint);
        }
    }, [endpoint]); // Dependência de 'token' e 'endpoint'

    // Função para alterar a seção ativa e o endpoint fora do useEffect
    const changeSection = (section) => {
        if (section !== activeSection) {
            setActiveSection(section); // Atualiza a seção ativa
            setEndpoint(sectionToEndpoint[section]); // Atualiza o endpoint correspondente
        }
    };

    return (
      
      <div id="ClientePage"> 
      <header className="header">
        <div className="user-info">
          <div >
          <img className="user-avatar" src={IMGatual} alt="Fotinha"/>
          </div>
          <div className="user-details">
          {console.log("Token:", token)}

            <h2> {token['usuario']}</h2>
            <p> {token['email']}  </p>
          </div>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebaroption">
          <ul>
            <li><button onClick={() => changeSection('pedidos')}>Pedidos</button></li>
            <li><button onClick={() => changeSection('endereco')}>Endereço de Entrega</button></li>
            <li><button onClick={() => changeSection('ticket')}>TICKETS</button></li>
            <li><button onClick={() => changeSection('pagamento')}>Métodos de Pagamento</button></li>
            <li><button onClick={() => changeSection('config')}>Configurações de Conta</button></li>
          </ul>
        </nav>

        <section className="content2">
          <div className="section-header">
            <h3 id="section-title">
              {
               activeSection === 'endereco' ? 'Endereço de Entrega' :
               activeSection === 'ticket' ? 'Dados de Contato' :
               activeSection === 'pagamento' ? 'Métodos de Pagamento' :
               activeSection === 'pedidos' ? 'Pedidos' :
               'Configurações de Conta'}
            </h3>
          </div>
          <div className="section-content">
            <div className={`section-content-box ${activeSection === 'endereco' ? 'show' : 'hide'}`}>
            <button onClick={handleAddress}>Criar endereco</button>


            {createAddres?(

              <form onSubmit={adicionarAdress}>
                
                <h2>Nome do Local:</h2>
                <input type="text" 
                name="nome"
                value={formDataAddress.nome}
                onChange={(e)=>setFormDataAddress({...formDataAddress,nome:e.target.value})} />
                
                <h2>Rua</h2>
                <input type="text" 
                name="rua"
                value={formDataAddress.rua}
                onChange={(e)=>setFormDataAddress({...formDataAddress,rua:e.target.value})}/>
                
                <h2>CEP</h2>
                <input 
                type="text"
                name="cep"
                value={formDataAddress.cep}
                onChange={(e)=>setFormDataAddress({...formDataAddress,cep:e.target.value})} />

                <h2>Complemento</h2>
                <input type="text"
                name="complemento"
                value={formDataAddress.complemento}
                onChange={(e)=>setFormDataAddress({...formDataAddress,complemento:e.target.value})} />

                <button type = "submit">Salvar</button>
              </form>

            )
            
            :ID && Array.isArray(ID["data"]) ? ( //condicional que verifica se o ID está setado para evitar crash
          ID['data'].map((item,i) => ( 
            <div key={i}>
              
               <p>Nome do local:{item['nome']}</p>
               <p>Cep:{item['cep']}</p>
               <p>{item['rua']}</p>
               <p>{item['complemento']}</p>
               <button value = {item['idEndereco']}onClick={(e)=>(Deletar(e.target.value))}>DELETAR</button>
              

            </div>
            
          ))
      ) : <p>Nenhum resultado encontrado</p>}
 </div>


            <div className={`section-content-box ${activeSection === 'ticket' ? 'show' : 'hide'}`}>
              <p> Sem suporte pra voce</p>

            </div>




            <div className={`section-content-box ${activeSection === 'pagamento' ? 'show' : 'hide'}`}>
            <button onClick={handleCard}>Criar Cartao</button>

             {createCard?(

              <form onSubmit={adicionarCartão}>
                
                <h2>NumeroCC</h2>
                <input type="text" 
                name="numeroCC"
                value={formDataCard.numeroCC}
                onChange={(e)=>setFormDataCard({...formDataCard,numeroCC:e.target.value})} />
                
                <h2>CVV</h2>
                <input type="text" 
                name="cvv"
                value={formDataCard.cvv}
                onChange={(e)=>setFormDataCard({...formDataCard,cvv:e.target.value})}/>
                
                <h2>validade</h2>
                <input 
                type="text"
                name="validade"
                value={formDataCard.validade}
                onChange={(e)=>setFormDataCard({...formDataCard,validade:e.target.value})} />

                <button type = "submit">Salvar</button>
              </form>

            ):ID && Array.isArray(ID["data"]) ? ( //condicional que verifica se o ID está setado para evitar crash
          ID['data'].map((item,i) => ( 
            <div key={i}>
               <p>ID CARTÃO:{item['idCartao']}</p>
               <p>Cartão : **** **** **** {item['final']}</p>
               <button value = {item['idCartao']}onClick={(e)=>(Deletar(e.target.value))}>DELETAR</button>


            </div>))):<p>Nenhum resultado encontrado</p>}
            </div>

            <div className={`section-content-box ${activeSection === 'config' ? 'show' : 'hide'}`}>
              
              <h2> {token['usuario']}</h2>
              <p> {token['email']}  </p>
              <p>Coloque o link da imagem que gostaria:</p>
              <input type="text" placeholder="Coloque o link" onChange={(e)=>(setLinkPic(e.target.value))}/>
              <button onClick={handleEdit}>Salvar</button>


            </div>

            <div className={`section-content-box ${activeSection === 'pedidos' ? 'show' : 'hide'}`}>
            {ID && Array.isArray(ID["data"]) ? ( //condicional que verifica se o ID está setado para evitar crash
          ID['data'].map((item,i) => ( 
            <div key={i}>
               <p>Pedido:{item['idPedido']}</p>    
               <p>Nome do local:{item['estado']}</p>           
               <p>SUBTOTAL:   {item['valorFinal']}</p>
               <p>Cartão:  {item['metodoPagamento']}</p>
            </div>
 
          ))
      ) : <p>Nenhum resultado encontrado</p>}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
