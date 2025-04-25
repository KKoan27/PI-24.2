import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CompCss/Footer.css';
import Logo from '../Imagens/Logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Rodape() {
    return (
        <footer className="Rodape">
            <div className="Rodape__left">
                <h4>INSTITUCIONAL</h4>
                <ul>
                    <li><Link to="/ajuda">Central de Ajuda</Link></li>
                    <li><Link to="/ajuda">Perguntas Frequentes</Link></li>
                    <li><Link to="/ajuda">Formas de Pagamento e Envio</Link></li>
                    <li><Link to="/ajuda">Garantia, Trocas e Devolução</Link></li>
                    <li><Link to="/politicas">Políticas e Privacidade</Link></li>
                </ul>
            </div>

            <div className="Rodape__center">
                <img src={Logo} alt="OctoCore Logo" />
            </div>

            <div className="Rodape__right">
                <h4>CENTRAL DE ATENDIMENTO</h4>
                <ul>
                    <li><PhoneIcon className="icon" /> 15 3243-1651</li>
                    <li><WhatsAppIcon className="icon" /> 15 99745-0432</li>
                    <li><EmailIcon className="icon" /> contato@octocore.com.br</li>
                    <li>Seg à Sex 8:00 às 18:00</li>
                    <li>Sáb 08:00 às 12:00</li>
                    <li>Somos uma loja 100% virtual, não possuímos lojas físicas</li>
                </ul>
            </div>
        </footer>
    );
}

export default Rodape;

