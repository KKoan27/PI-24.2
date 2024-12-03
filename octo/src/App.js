import './App.css';
import Rodape from './Componentes/Footer';
import Cabeçalho from './Componentes/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSlider from './Componentes/Home';
import MontePC from './Componentes/PAGINAS/Monte-seu-PC';
import Atendimento from './Componentes/PAGINAS/Atendimento';
import PCgamer from './Componentes/PAGINAS/PCSGamer';
import MinhaConta from './Componentes/PAGINAS/MinhaConta';
import GamePage from './Componentes/PAGINAS/GamePage';
import CartPage from './Componentes/PAGINAS/CartPage';
import PC1 from './Componentes/PAGINAS/PC1';
import PC2 from './Componentes/PAGINAS/PC2';
import PC3 from './Componentes/PAGINAS/PC3';
import ThankYouPage from './Componentes/PAGINAS/ThankYouPage'; 

function App() {
  return (
    <BrowserRouter>
      <Cabeçalho />
      <main>
        <Routes>
          <Route path="/" element={<HomeSlider />}></Route>
          <Route path="/:game" element={<GamePage />} />
          <Route path="/PCs-gamer" element={<PCgamer></PCgamer>}></Route>
          <Route path="/Monte-seu-PC" element={<MontePC />}></Route>
          <Route path="/Atendimento" element={<Atendimento />}></Route>
          <Route path="/MinhaConta" element={<MinhaConta />}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
          <Route path="/PC1" element={<PC1 />} />
          <Route path="/PC2" element={<PC2 />} />
          <Route path="/PC3" element={<PC3 />} />
          <Route path="/thank-you" element={<ThankYouPage />} /> 
        </Routes>
      </main>

      <Rodape />
    </BrowserRouter>
  )

}

export default App;