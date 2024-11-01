import Logo from "../Imagens/Logo.png"
import "./CompCss/Header.css"
function Cabeçalho(){
    return(
        <header className=" Cabecalho">
             <img src={Logo} alt="OctoLogo"/>

            <nav id= "HeaderOp">
                    <Link>Departamentos</Link>
            
                    <Link id={location.pathname ==="/" ? "active.link" : "home-link"} to = {"/"}> Home</Link>

                <Link id={location.pathname === "/PCs-gamer" ? "active-link" : "pc-gamer-link"} to="/PCs-gamer">PC's Gamer</Link>
                <Link id={location.pathname === "/Monte-seu-PC" ? "active-link" : "monte-pc-link"} to="/Monte-seu-PC">Monte seu PC</Link>
                <Link id={location.pathname === "/Atendimento" ? "active-link" : "atendimento-link"} to="/Atendimento">Atendimento</Link>
                <Link id={location.pathname === "/Login" ? "active-link" : "login-link"} to="/Login">Login</Link>
            </nav>
        </header>
    )
}
export default Cabeçalho