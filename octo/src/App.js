import './App.css';
import Rodape from './Componentes/Footer';
import Cabeçalho from './Componentes/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSlider from './Componentes/HomeSlider';
import Login from './Componentes/PAGINAS/Login'
import MontePC from './Componentes/PAGINAS/Monte-seu-PC';
import Atendimento from './Componentes/PAGINAS/Atendimento';
import PCgamer from './Componentes/PAGINAS/PCSGamer';
import MinhaConta from './Componentes/PAGINAS/MinhaConta';
import Carrinho from './Componentes/PAGINAS/Carrinho';

function App() {
  return (
    <BrowserRouter>
      <Cabeçalho />
      <Routes>

        <Route path="/" element={<HomeSlider />}></Route>
        <Route path="/PCs-gamer" element={<PCgamer></PCgamer>}></Route>
        <Route path="/Monte-seu-PC" element={<MontePC />}></Route>
        <Route path="/Atendimento" element={<Atendimento />}></Route>
        <Route path="/MinhaConta" element={<MinhaConta />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Carrinho" element={<Carrinho />}></Route>

      </Routes>
      <div id="rodape">
        <Rodape />
      </div>
    </BrowserRouter>
  )

}

export default App;
