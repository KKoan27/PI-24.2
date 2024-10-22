import Logo from "../Imagens/Logotipo.png"
import "./CompCss/Header.css"
function Cabeçalho(){
    return(
        <header>
            <img src={Logo} />
            <h1>OctoCore</h1>
            <div className="options">
              <nav>
                <h3>home</h3>
                <h3>shop</h3>
              </nav>
            </div>
           
            <div id="search"><input type="text" placeholder="Procure seu PC ideal aqui"/></div>
        </header>
    )
}
export default Cabeçalho