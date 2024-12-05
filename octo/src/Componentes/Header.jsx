import React, { useState, useEffect } from 'react';
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
import './CompCss/Sidebar.css';
import './CompCss/Header.css';

import Modal from './Modal';

const Header = () => {
    const [searchParams] = useSearchParams();


    
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const location = useLocation();


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };
    useEffect(() => {
        if (searchParams.get('showModal') === 'true') {
            setIsModalOpen(true); // Exibe o modal se o parâmetro for true
        }
      }, [searchParams]);


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
                    <ListItemText primary="PC's Gamer" />
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

    return (<>
            
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
                     <ListItemButton onClick={()=>{setIsModalOpen(true)
                     }} className="header-link">
                    <ExitToAppIcon className="header-icon" />
                    Login
                </ListItemButton>

                </div>)
                }
                {isModalOpen && <Modal isOpen={true} onClose={handleCloseModal}/>}
             
                <span className="divider"></span>
               

                <Link
                    id={location.pathname === "/CartPage" ? "active-link" : "cart-link"}
                    to="/CartPage"
                    className="header-link"
                >
                    <LocalGroceryStoreIcon className="header-icon" />
                </Link>
            </nav>

            
            

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </header>
        </>
    );
};

export default Header;