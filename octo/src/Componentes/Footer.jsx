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
                    <li>A OctoCore</li>
                    <li>Perguntas Frequentes</li>
                    <li>Formas de Pagamento e Envio</li>
                    <li>Garantia, Trocas e Devolução</li>
                    <li>Política e Privacidade</li>
                    <li>Fale Conosco</li>
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

