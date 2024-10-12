import Logo from "../Imagens/Logotipo.png"
import "./CompCss/Header.css"
function Cabeçalho(){
    return(
        <header>
            <img src={Logo} />
            <h1>OctoCore</h1>
            <input type="text" />
        </header>
    )
}
export default Cabeçalho