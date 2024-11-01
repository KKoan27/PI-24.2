import './App.css';
import Rodape from './Componentes/Footer';
import Cabeçalho from './Componentes/Header';
import HomeSlider from './Componentes/HomeSlider';

function App() {
  return (
    <div id="root">
      <div className="Cabecalho">
        <Cabeçalho />
      </div>
      <main>
        <HomeSlider />
      </main>
      <div className="Rodape">
        <Rodape />
      </div>
    </div>
  );
}

export default App;
