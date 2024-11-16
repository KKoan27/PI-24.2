import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado');
        handleCloseModal();
    };

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
                    <ListItemButton component={Link} to="/Login">
                        <ListItemIcon>
                            <PermIdentityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Minha conta" />
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

                <Link
                    id={location.pathname === "/MinhaConta" ? "active-link" : "MinhaConta-link"}
                    to="/MinhaConta"
                    className="header-link"
                >
                    <PermIdentityIcon className="header-icon" />
                    Minha Conta
                </Link>
                <span className="divider"></span>
                <ListItemButton onClick={handleOpenModal} className="header-link">
                    <ExitToAppIcon className="header-icon" />
                    Login
                </ListItemButton>

                <Link
                    id={location.pathname === "/Carrinho" ? "active-link" : "Carrinho-link"}
                    to="/Carrinho"
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="username@gmail.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha:</label>
                                <input type="password" id="password" placeholder="Senha" required />
                            </div>

                            <Link to="/forgot-password" className="link-forgot">Esqueceu a senha?</Link>

                            <button type="submit" className='login-button'>Entrar</button>

                            <Link
                                onClick={handleOpenCadastroModal}
                                className="link-register"
                            >
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Nome de Usuário:</label>
                                <input type="text" id="username" placeholder="Nome de usuário" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="username@gmail.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha:</label>
                                <input type="password" id="password" placeholder="Crie uma senha" required />
                            </div>

                            <button type="submit" className='register-button'>Cadastrar</button>
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