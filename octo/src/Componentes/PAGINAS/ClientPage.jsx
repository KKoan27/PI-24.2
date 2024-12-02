import {React, useState, useRef, useEffect} from "react";
import '../CompCss/ClientPage.css';
import Img from "../../Imagens/ekkoicon.jpg"
import PrivateRoute from "../PrivateRoute";


export default function FuncClientePage(){

    const[data,setdata] = useState("")
    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;


    const [activeSection, setActiveSection] = useState('dados'); // Inicializa com 'dados'
  
    // Função para alterar a seção ativa
    const changeSection = (section) => {
      setActiveSection(section);
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

              <h2> {token ['usuario']}</h2>
              <p> {token['email']}  </p>
            </div>
          </div>
        </header>
  
        <div className="main-container">
          <nav className="sidebaroption">
            <ul>
              <li><button onClick={() => changeSection('dados')}>Dados Pessoais</button></li>
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
                 'Configurações de Conta'}
              </h3>
            </div>
            <div className="section-content">
              <div className={`section-content-box ${activeSection === 'dados' ? 'show' : 'hide'}`}>
                    <h2>Nome completo: {token['usuario']} </h2>
                    <h2>Email: {token['email']}</h2>
                    
              </div>
              <div className={`section-content-box ${activeSection === 'endereco' ? 'show' : 'hide'}`}>
                <p>Conteúdo de Endereço de Entrega aqui...</p>
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
            </div>
          </section>
        </div>
      </div>
    )
}


