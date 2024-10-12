import './App.css';
import Rodape from './Componentes/Footer';
import Cabeçalho from './Componentes/Header';

function App() {
  return (
    <body>
      <div className= "Cabecalho">  <Cabeçalho/> </div>
      <main>
        <h1> Ola mundo</h1>
      </main>
      <div className = "Rodape"> <Rodape/> </div>
    </body>
   
  );
}

export default App;
