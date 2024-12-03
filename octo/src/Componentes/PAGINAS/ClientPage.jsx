import React, { useState, useEffect } from "react";
import '../CompCss/ClientPage.css'
export default function FuncClientePage() {
    const url = `http://localhost/OctoCore_API/endpoints/`;
    const [endpoint, setEndpoint] = useState("users/auth");
    const [ID, setID] = useState("");
    const [activeSection, setActiveSection] = useState("dados"); // Inicializa com 'dados'
    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;

    // Mapeamento de seções para endpoints
    const sectionToEndpoint = {
        dados: "users/auth",
        pedidos: "order/order",
        endereco: "users/endereco",
        contato: "users/contact",
        pagamento: "users/payment",
        config: "users/config",
    };

    // Função para puxar dados
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
    }, [token, endpoint]); // Dependência de 'token' e 'endpoint'

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
          <img className="user-avatar" src={token['linkPFP']} alt="Fotinha"/>
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
            <li><button onClick={() => changeSection('dados')}>Dados Pessoais</button></li>
            <li><button onClick={() => changeSection('pedidos')}>Pedidos</button></li>
            <li><button onClick={() => changeSection('endereco')}>Endereço de Entrega</button></li>
            <li><button onClick={() => changeSection('contato')}>Dados de Contato</button></li>
            <li><button onClick={() => changeSection('pagamento')}>Métodos de Pagamento</button></li>
            <li><button onClick={() => changeSection('config')}>Configurações de Conta</button></li>
          </ul>
        </nav>

        <section className="content">
          <div className="section-header">
            <h3 id="section-title">
              {activeSection === 'dados' ? 'Dados Pessoais' :
               activeSection === 'endereco' ? 'Endereço de Entrega' :
               activeSection === 'contato' ? 'Dados de Contato' :
               activeSection === 'pagamento' ? 'Métodos de Pagamento' :
               activeSection === 'pedidos' ? 'Pedidos' :
               'Configurações de Conta'}
            </h3>
          </div>
          <div className="section-content">
            <div className={`section-content-box ${activeSection === 'dados' ? 'show' : 'hide'}`}>
                  <h2>Nome completo: {token['usuario']} </h2>
                  <h2>Email: {token['email']}</h2>
                  
            </div>
            <div className={`section-content-box ${activeSection === 'endereco' ? 'show' : 'hide'}`}>

            {ID && Array.isArray(ID["data"]) ? ( //condicional que verifica se o ID está setado para evitar crash
          ID['data'].map((item,i) => ( 
            <div key={i}>
              
               <p>Nome do local:{item['nome']}</p>
               <p>Cep:{item['cep']}</p>
               <p>{item['rua']}</p>
               <p>{item['complemento']}</p>

            </div>
            
          ))
      ) : <p>Nenhum resultado encontrado</p>}
            </div>
            <div className={`section-content-box ${activeSection === 'contato' ? 'show' : 'hide'}`}>
              <p>Conteúdo de Dados de Contato aqui...</p>
            </div>
            <div className={`section-content-box ${activeSection === 'pagamento' ? 'show' : 'hide'}`}>
              <p>Conteúdo de Métodos de Pagamento aqui...</p>
            </div>
            <div className={`section-content-box ${activeSection === 'config' ? 'show' : 'hide'}`}>
              <p>Conteúdo de Configurações de Conta aqui...</p>
            </div>
            <div className={`section-content-box ${activeSection === 'pedidos' ? 'show' : 'hide'}`}>
            {ID && Array.isArray(ID["data"]) ? ( //condicional que verifica se o ID está setado para evitar crash
          ID['data'].map((item,i) => ( 
            <div key={i}>
              
               <p>Nome do local:{item['estado']}</p>
               <p>Cep:{item['idPedido']}</p>
               <p>{item['valorTotal']}</p>
               <p>{item['valorFinal']}</p>
               <p>{item['valorDesconto']}</p>
               <p>{item['valorFrete']}</p>
               <p>{item['metodoPagamento']}</p>
               <p>{item['codigoRastreio']}</p>
              

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
