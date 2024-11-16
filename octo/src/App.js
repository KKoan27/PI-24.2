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
import PC1 from './Componentes/PAGINAS/PC1';
import PC2 from './Componentes/PAGINAS/PC2';
import PC3 from './Componentes/PAGINAS/PC3';

function App() {
  return (
    <BrowserRouter>
      <Cabeçalho />
      <main>
        <Routes>
          <Route path="/" element={<HomeSlider />}></Route>
          <Route path="/PCs-gamer" element={<PCgamer></PCgamer>}></Route>
          <Route path="/Monte-seu-PC" element={<MontePC />}></Route>
          <Route path="/Atendimento" element={<Atendimento />}></Route>
          <Route path="/MinhaConta" element={<MinhaConta />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Carrinho" element={<Carrinho />}></Route>
          <Route path="/" element={<HomeSlider />} />
          <Route path="/PC1" element={<PC1 />} />
          <Route path="/PC2" element={<PC2 />} />
          <Route path="/PC3" element={<PC3 />} />


        </Routes>
      </main>

      <Rodape />
    </BrowserRouter>
  )

}

export default App;
