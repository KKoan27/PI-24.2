import React, { useState, useEffect } from "react";
import '../CompCss/ClientPage.css'

export default function FuncClientePage() {
    const url = `http://localhost/OctoCore_API/endpoints/`;
    const [endpoint, setEndpoint] = useState("order/order");
    const [ID, setID] = useState("");
    const [activeSection, setActiveSection] = useState("pedidos"); // Inicializa com 'dados'
    const dados = localStorage.getItem("dados") ? JSON.parse(localStorage.getItem("dados")) : null;
    const [IMGatual,setIMGatual]= useState(dados['linkPFP'])
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
        alert("Deletado com sucesso")
        await Pulldata(dados['idUsuario'], endpoint); // Atualiza os dados
      }
      else{
        alert("Falha ao deletar :c")
      }
  }


    
  async function AddAdress({ nome, rua, cep, complemento }) {
    const payload = {
      nome,
      rua,
      cep,
      complemento,
      idUsuario: dados['idUsuario'],
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

          await Pulldata(dados['idUsuario'], "users/endereco")
          alert("Adicionado com sucesso!")

        }

      } catch (error){
        alert("Erro ao adicionar:", error);
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
        idUsuario: dados['idUsuario'],
      };
        try {
          const resposta = await fetch (`http://localhost/octocore_api/endpoints/users/cc.php/?user=${dados['idUsuario']}`,{
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

      async function toggleActiveCard(cardId) {
        const payload = {
            IDCC: cardId,
            idUsuario: dados['idUsuario'],
            
        };
    
        try {
            const response = await fetch(`http://localhost/octocore_api/endpoints/users/cc.php`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
    
            if (!response.ok) {
                throw new Error(`Erro ao atualizar cartão: ${response.status} - ${response.statusText}`);
            }
    
            await Pulldata(dados['idUsuario'], "users/cc"); // Atualiza a lista de cartões
        } catch (error) {
            alert(`Erro ao atualizar cartão: ${error.message}`);
        }
    }
    


      // SEÇÂO DE EDIÇÂO DE FOTO
    async function handleEdit() {
      const payload = {
          idUsuario: dados['idUsuario'],
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
          dados.linkPFP = LinkPic
          localStorage.setItem("dados", JSON.stringify(dados));
     
        

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

    // useEffect apenas para monitorar mudanças nos dados e endpoint
    useEffect(() => {
        if (dados && dados["idUsuario"] ) {
            Pulldata(dados["idUsuario"], endpoint);
        }
    }, [endpoint]); // Dependência de 'dados' e 'endpoint'

    // Função para alterar a seção ativa e o endpoint fora do useEffect
    const changeSection = (section) => {
        if (section !== activeSection) {
            setActiveSection(section); // Atualiza a seção ativa
            setEndpoint(sectionToEndpoint[section]); // Atualiza o endpoint correspondente
        }
    };

    return (
      
      <div id="ClientePage"> 
      <div className="TitleHeader">
        <div className="user-info">
          <div >
          <img className="user-avatar" src={IMGatual} alt="Fotinha"/>
          </div>
          <div className="user-details">
          {console.log("dados:", dados)}

            <h2> {dados['usuario']}</h2>
            <p> {dados['email']}  </p>
          </div>
        </div>
      </div>
      
      <div className="main-container">
        <nav className="sidebaroption">
          <ul>
            <li  onClick={() => changeSection('pedidos')}class={`${activeSection === 'pedidos'? 'active': ''}`}>Pedidos</li>
            <li onClick={() => changeSection('endereco')} class={`${activeSection === 'endereco'? 'active': ''}`} >Endereços de Entrega</li>
            <li onClick={() => changeSection('pagamento')} class={`${activeSection === 'pagamento'? 'active': ''}`}>Métodos de Pagamento</li>
            <li onClick={() => changeSection('config')}class={`${activeSection === 'config'? 'active': ''}`}>Configurações de Conta</li>
          </ul>
        </nav>

        <section className="content2">
          <div className="section-header">
            <h3 id="section-title">
              {
               activeSection === 'endereco' ? 'Endereços de Entrega' :
               activeSection === 'ticket' ? 'Dados de Contato' :
               activeSection === 'pagamento' ? 'Métodos de Pagamento' :
               activeSection === 'pedidos' ? 'Pedidos' :
               null}
            </h3>
          </div>
          <div className="section-content">
            <div className={`section-content-box ${activeSection === 'endereco' ? 'show' : 'hide'}`}>
            <button onClick={handleAddress}>Criar endereco</button>
            <p>-------------------------------------</p>


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
              
               <h2 style={{textAlign:"center"}}>{item['nome']}</h2>
               <p style={{textAlign:"center"}}>Cep:{item['cep']}</p>
               <p  style={{textAlign:"center"}}>Rua:{item['rua']}</p>
               <p style={{textAlign:"center"}}>Complemento{item['complemento']}</p>
               <button value = {item['idEndereco']}onClick={(e)=>(Deletar(e.target.value))}>DELETAR</button>
               <p>-------------------------------------</p>
              

            </div>
            
          ))
      ) : <p>Nenhum resultado encontrado</p>}
 </div>


            <div className={`section-content-box ${activeSection === 'ticket' ? 'show' : 'hide'}`}>
              <p> Sem suporte pra voce</p>

            </div>




            <div className={`section-content-box ${activeSection === 'pagamento' ? 'show' : 'hide'}`}>
            <button onClick={handleCard}>Criar Cartao</button>
            <p>-------------------------------------</p>

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
              
               <p>Cartão principal:   
            <input 
                type="radio" 
                name="activeCard" 
                checked={item.isActive} // Exibe como selecionado se for ativo
                onChange={() => toggleActiveCard(item['idCartao'])} 
            /></p>
               <p>Cartão : **** **** **** {item['final']}</p>
               
           
        
               <button value = {item['idCartao']}onClick={(e)=>(Deletar(e.target.value))}>DELETAR</button>
               <p>-------------------------------------</p>


            </div>))):<p>Nenhum resultado encontrado</p>}
            </div>

            <div className={`section-content-box ${activeSection === 'config' ? 'show' : 'hide'}`}>
              
              <h2 style={{textAlign:"center"}}> {dados['usuario']}</h2>
              <p style={{textAlign:"center"}}> {dados['email']}  </p>
              <p style={{textAlign:"center"}}>Coloque o link da imagem que gostaria:</p>
              <input type="text" placeholder="Coloque o link" onChange={(e)=>(setLinkPic(e.target.value))}/>
              <button  onClick={handleEdit}>Salvar</button>


            </div>

            <div className={`section-content-box ${activeSection === 'pedidos' ? 'show' : 'hide'}`}>
            {ID && Array.isArray(ID["data"]) ? ( //condicional que verifica se o ID está setado para evitar crash
          ID['data'].map((item,i) => ( 
            <div key={i}>
               <p>Pedido:{item['idPedido']}</p>    
               <p>Status:{item['estado']}</p>           
               <p>Total:   {item['valorFinal']}</p>
               <p>Método de Pagamento:  {item['metodoPagamento']}</p>
               <p>-------------------------------------</p>
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
