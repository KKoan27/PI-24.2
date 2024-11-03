
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ConstructionIcon from '@mui/icons-material/Construction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Logo from '../Imagens/Logo.png';
import './CompCss/Sidebar.css';
import './CompCss/Header.css';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
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
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <PermIdentityIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Minha conta" />
                    </ListItemButton>
                </ListItem>
    
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/about">
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
            </Box>
        
            
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/contact">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ConstructionIcon />
                        </ListItemIcon>
                        <ListItemText primary="PC’s Gamer" />
                    </ListItemButton>
                </ListItem>
            
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/contact">
                        <ListItemIcon>
                            <SportsEsportsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Monte seu PC" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
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
                <Link id={location.pathname === "/" ? "active-link" : "home-link"} to="/">Home</Link>
                <Link id={location.pathname === "/PCs-gamer" ? "active-link" : "pc-gamer-link"} to="/PCs-gamer">PC's Gamer</Link>
                <Link id={location.pathname === "/Monte-seu-PC" ? "active-link" : "monte-pc-link"} to="/Monte-seu-PC">Monte seu PC</Link>
                <Link id={location.pathname === "/Atendimento" ? "active-link" : "atendimento-link"} to="/Atendimento">Atendimento</Link>
                <Link id={location.pathname === "/Login" ? "active-link" : "login-link"} to="/Login">Login</Link>
            </nav>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </header>
    );
};

export default Header;
