import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ConstructionIcon from '@mui/icons-material/Construction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Logo from '../Imagens/Logo.png';
import Logo2 from '../Imagens/Logo2.png';
import './CompCss/Sidebar.css';
import './CompCss/Header.css';
import './CompCss/Cadastro.css';

const Header = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        user: ""
    })


    
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

    const location = useLocation();


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
           
            console.log("Logado")
            

            const token = response['data']
            localStorage.setItem('token', JSON.stringify(token));
            navigate("/ClientPage")
            handleCloseModal()

        }
        else{
            console.log(token)
            console.log("Errou nas credenciais")
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
           

            alert("Conta criada com sucesso")

            setIsModalOpen(true)
            setIsCadastroModalOpen(false)

        }
        else{
            alert("Erro ao criar a conta, usuário ou email já em uso :c")
        }

   
    }
    function handleChange(e) { //atualiza o formulario de login
        const { name, value } = e.target;
        setLoginForm((prevData) => ({ ...prevData, [name]: value }));
    }
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };


    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate ("/")
        window.location.reload()
    }
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenCadastroModal = () => {
        setIsModalOpen(false); // Fecha o modal de login
        setIsCadastroModalOpen(true); // Abre o modal de cadastro
    };

    const handleCloseCadastroModal = () => {
        setIsCadastroModalOpen(false);
    };

    const handleOpenForgotPasswordModal = () => {
        setIsModalOpen(false); // Fecha o modal de login
        setIsForgotPasswordModalOpen(true); // Abre o modal de recuperação de senha
    };
    
    const handleCloseForgotPasswordModal = () => {
        setIsForgotPasswordModalOpen(false);
    };

    // ---------------- Não estava sendo utilizado!!! --------------// 
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleCloseModal();
    // };

    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
    const drawerList = (
        <Box
            className="sidebar"
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/ClientPage">
                        <ListItemIcon>
                            <PermIdentityIcon />
                        </ListItemIcon>
                        
                    </ListItemButton>
                </ListItem>
                <span className="divider"></span>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleOpenModal}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
            </Box>

            <ListItem disablePadding>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/PCs-gamer">
                <ListItemButton>
                    <ListItemIcon>
                        <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText primary="PC’s Gamer" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component={Link} to="/Monte-seu-PC">
                    <ListItemIcon>
                        <ConstructionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Monte seu PC" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/Atendimento">
                <ListItemButton>
                    <ListItemIcon>
                        <SupportAgentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Suporte" />
                </ListItemButton>
            </ListItem>
        </Box>
    );

    return (
        <header className="Cabecalho">
            <img src={Logo} alt="OctoLogo" />

            <nav id="HeaderOp">
                <IconButton onClick={toggleDrawer(true)} aria-label="open drawer">
                    <MenuIcon sx={{ color: 'white' }} />
                    <span style={{ color: 'white', marginLeft: '8px' }}>Departamentos</span>
                </IconButton>

                <Link
                    id={location.pathname === "/" ? "active-link" : "home-link"}
                    to="/"
                    className="header-link"
                >
                    <HomeIcon className="header-icon" />
                    Home
                </Link>

                <Link
                    id={location.pathname === "/PCs-gamer" ? "active-link" : "pc-gamer-link"}
                    to="/PCs-gamer"
                    className="header-link"
                >
                    <SportsEsportsIcon className="header-icon" />
                    PC's Gamer
                </Link>

                <Link
                    id={location.pathname === "/Monte-seu-PC" ? "active-link" : "monte-pc-link"}
                    to="/Monte-seu-PC"
                    className="header-link"
                >
                    <ConstructionIcon className="header-icon" />
                    Monte seu PC
                </Link>

                <Link
                    id={location.pathname === "/Atendimento" ? "active-link" : "atendimento-link"}
                    to="/Atendimento"
                    className="header-link"
                >
                    <SupportAgentIcon className="header-icon" />
                    Atendimento
                </Link>
                

                {token ? (<div id='login'>
                    <Link
                    id={location.pathname ==="/ClientePage" ? "active-link" : "ClientPage-link"}
                    to="/ClientPage"
                    className="header-link">
                    <PermIdentityIcon className="header-icon" />
                    Minha Conta
                </Link>

                <a className="header-link" onClick={handleLogout}> Logout</a> 
                </div>)
                 : 
                (<div id='login'> 
                     <ListItemButton onClick={handleOpenModal} className="header-link">
                    <ExitToAppIcon className="header-icon" />
                    Login
                </ListItemButton>

                </div>)
                }
             
                <span className="divider"></span>
               

                <Link
                    id={location.pathname === "/CartPage" ? "active-link" : "cart-link"}
                    to="/CartPage"
                    className="header-link"
                >
                    <LocalGroceryStoreIcon className="header-icon" />
                </Link>
            </nav>

            {/* Modal de Login */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <img src={Logo2} alt="LogoBranca" />
                        <h2>Login</h2>
                        <form onSubmit={handleAuth}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input name = 'email' onChange = {handleChange} type="email" id="email" placeholder="username@gmail.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha:</label>    
                                <input name = 'password' onChange = {handleChange}type="password" id="password" placeholder="Senha" required />

                            </div>
                            <Link
                                onClick={handleOpenForgotPasswordModal} 
                                className="link-forgot">
                                Esqueceu a senha?
                            </Link>
                           <button type="submit" className='login-button'>Entrar</button>
                           <Link
                                onClick={handleOpenCadastroModal}
                                className="link-register">
                                Criar conta
                            </Link>
                        </form>


                        
                    </div>
                </div>
            )}

            {/* Modal de Cadastro */}
            {isCadastroModalOpen && (
                <div className="modal-overlay" onClick={handleCloseCadastroModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseCadastroModal}>×</button>
                        <img src={Logo2} alt="LogoBranca" />

                        <h2>Criar Conta</h2>
                        <form onSubmit={handleSignup}>
                            <div className="form-group">
                                <label htmlFor="username">Nome de Usuário:</label>
                                <input type="text" name = 'user' id="username" placeholder="Nome de usuário" required onChange = {handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name = 'email' placeholder="username@gmail.com" required  onChange = {handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha:</label>
                                <input type="password" id="password" name = 'password' placeholder="Crie uma senha" required onChange = {handleChange}/>
                            </div>

                            <button type="submit" className='send-button'>Enviar</button>
                        </form>
                    </div>
                </div>
            )}
            {/* Modal de Recuperar Senha */}
            {isForgotPasswordModalOpen && (
                <div className="modal-overlay" onClick={handleCloseForgotPasswordModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={handleCloseForgotPasswordModal}>×</button>
                    <img src={Logo2} alt="LogoBranca" />

                        <h2>Recuperar Senha</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Nome de Usuário:</label>
                                <input type="text" id="username" placeholder="Nome de usuário" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="username@gmail.com" required />
                            </div>

                            <button type="submit" className='register-button'>Link para resetar senha enviado!</button>
                        </form>
                    </div>
                </div>
            )}

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </header>
    );
};

export default Header;