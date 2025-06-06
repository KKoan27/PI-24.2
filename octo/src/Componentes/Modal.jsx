import React from "react";
import { useState } from "react";
import Logo2 from '../Imagens/Logo2.png';
import './CompCss/Modal.css';

function Modal({isOpen, onClose}){
    const [isModalOpen, setIsModalOpen] = useState(isOpen)
    const [tipoModal , setTipoModal] = useState('login')
    const [status, setStatus] = useState(null)
   
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
         
           
            setStatus(false)
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
           
            setStatus(true)
            

            

        }
        else{
            setStatus(false)
        }

   
    }
    async function handleRecovery(e){
        //Um dia vai dar pra recuperar a conta 🙏🙏
        const url = "http://localhost/OctoCore_API/endpoints/users/recovery.php"
        e.preventDefault();
        const payload = {
            email: loginForm.email,
            user: loginForm.user
        };
        const requisicao = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(payload),
        })
       
        if (requisicao.ok){
            
            setStatus(true)


        }
        else{
         
           
            setStatus(false)
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
                    <img id='logoModal' src={Logo2} alt="LogoBranca" />
                    <div>
                    <label htmlFor="email">E-mail</label>
                    <input className = 'inputLogin' type='email' name="email" required onChange={handleChange}></input>
                    </div>
                    <div>
                    <label htmlFor="password">Senha</label>
                    <input className = 'inputLogin' type="password" name="password" required onChange={handleChange}></input>
                    </div>
                    <div id='opcoesModal2'>
                        <p id="mudarModal"  onClick={()=>{setTipoModal('cadastro');setStatus(null)}}>Não possuo uma conta</p>
                        <p id="mudarModal"  onClick={()=>{setTipoModal('recuperar');setStatus(null)}}>Esqueci minha senha :c</p>
                    </div>

                    <button className = 'inputLoginButton'>Login</button>
                    {status !== null ?(status === true?        <p id = 'statusText'style={{color: 'green'}}>Login bem sucedido! Redirecionando...</p>
                                             :  <p id = 'statusText'style={{color: 'red'}}>Credenciais incorretas</p>
                                     ) : null
                    }
                </form>

            )
        }
        else if(tipoModal === 'cadastro'){
            return (
                <form className="formularioLogin" onSubmit={handleSignup}>
                    <img id='logoModal'src={Logo2} alt="LogoBranca" />
                    <div>
                        <label htmlFor="user">User</label>
                        <input className = 'inputLogin' name="user" required onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input className = 'inputLogin' type='email' name="email" required onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input className = 'inputLogin' type="password" name="password" required onChange={handleChange}></input>
                    </div>
                    <div id='opcoesModal2'>
                        <p id="mudarModal"  onClick={()=>{setTipoModal('login');setStatus(null)}}>Retornar ao login</p>
                    </div>
                    <button className = 'inputLoginButton'>Cadastrar</button>
                    {status !== null ?(status === true?        <p id = 'statusText'style={{color: 'green'}}>Cadastro realizado com sucesso!</p>
                                             :  <p id = 'statusText'style={{color: 'red'}}>E-mail ou usuário já estão em uso</p>
                                     ) : null
                    }
                </form>

            )
        }
        else if(tipoModal === 'recuperar'){
            return(
                <form className="formularioLogin" onSubmit={handleRecovery}>
                    <img id='logoModal'src={Logo2} alt="LogoBranca" />
                    <div>
                        <label htmlFor="user">User</label>
                        <input className="inputLogin" name="user" required onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input className="inputLogin" type='email' name="email" required onChange={handleChange}></input>
                    </div>
                    <div id='opcoesModal2'>
                        <p id="mudarModal"  onClick={()=>{setTipoModal('login');setStatus(null)}}>Retornar ao login</p>
                    </div>
                    <button className= "inputLoginButton">Enviar</button>
                    {status !== null ?(status === true ?        <p id = 'statusText'style={{color: 'green'}}>E-mail de recuperação enviado</p>
                                             :                  <p id = 'statusText'style={{color: 'red'}}>E-mail não cadastrado</p>
                                     ) : null
                    }
                </form>
            )
        }
    }
    return(
    isModalOpen && (
      <div className="modalBackground" onClick={onClose}>
        <div className="formContainer" onClick={(e) => e.stopPropagation()}  >
      
            <p id="xizinho" onClick={onClose}>X</p>
  
        {renderContent()}
        </div>
      </div>
    )
    
    )
}

export default Modal