import React from "react";
import { useState } from "react";
import Logo2 from '../Imagens/Logo2.png';
import { Link } from "react-router-dom";
import './CompCss/Modal.css';

function Modal({isOpen, onClose}){
    const [isModalOpen, setIsModalOpen] = useState(isOpen)
    const [tipoModal , setTipoModal] = useState('login')
   
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        user: ""
    })
    
    async function handleAuth(e) {
        const url = "http://localhost/OctoCore_API/endpoints/users/auth.php"
        e.preventDefault();
        const payload = {
            email: loginForm.email,
            password: loginForm.password
        };
        const requisicao = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(payload),
        })
        const response = await requisicao.json()
        if (response['data']['autenticado'] === true){
            
            const token = response['data']
            localStorage.setItem('token', JSON.stringify(token));
            
            onClose()

        }
        else{
         
           
            alert("Credenciais incorretas")
        }

   
    }
    async function handleSignup(e) {
        const url = "http://localhost/OctoCore_API/endpoints/users/signup.php"
        e.preventDefault();
        const payload = {
            email: loginForm.email,
            password: loginForm.password,
            user: loginForm.user
        };
        const requisicao = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(payload),
        })
    
        if (requisicao.ok){
           
            setTipoModal('login')
            

            

        }
        else{
            alert("Erro ao criar a conta, usuário ou email já em uso :c")
        }

   
    }
    function handleChange(e) { //atualiza o formulario de login
        const { name, value } = e.target;
        setLoginForm((prevData) => ({ ...prevData, [name]: value }));
    }
    function renderContent(){
        if(tipoModal === 'login'){
            return (
                <form className="formularioLogin" onSubmit={handleAuth}>
                    <img src={Logo2} alt="LogoBranca" />
                    <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="inputLogin" type='email' name="email" required onChange={handleChange}></input>
                    </div>
                    <div>
                    <label htmlFor="password">Senha</label>
                    <input id="inputLogin" type="password" name="password" required onChange={handleChange}></input>
                    </div>
                    <p id="mudarModal"  onClick={()=>{setTipoModal('cadastro')}}>Não possuo uma conta</p>
                    <p id="mudarModal"  onClick={()=>{setTipoModal('recuperar')}}>Esqueci minha senha :c</p>
                    <button id= "inputLogin">Login</button>
                </form>

            )
        }
        else if(tipoModal === 'cadastro'){
            return (
                <form className="formularioLogin" onSubmit={handleSignup}>
                    <img id='logoModal'src={Logo2} alt="LogoBranca" />
                    <div>
                        <label htmlFor="user">User</label>
                        <input id="inputLogin" name="user" required onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input id="inputLogin" type='email' name="email" required onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input id="inputLogin" type="password" name="password" required onChange={handleChange}></input>
                    </div>
                    <button id= "inputLogin" type="button" onClick={()=>{setTipoModal('login')}}>Login</button>
                    <button id= "inputLogin">Cadastrar</button>
                </form>

            )
        }
    }
    return(
    isModalOpen && (
      <div className="modalBackground" onClick={onClose}>
        <div className="formContainer" onClick={(e) => e.stopPropagation()}  >
        {renderContent()}
        </div>
      </div>
    )
    
    )
}

export default Modal