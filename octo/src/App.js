import './App.css';
import Rodape from './Componentes/Footer';
import Cabeçalho from './Componentes/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSlider from './Componentes/HomeSlider';
import MontePC from './Componentes/PAGINAS/Monte-seu-PC';
import Atendimento from './Componentes/PAGINAS/Atendimento';
import PCgamer from './Componentes/PAGINAS/PCSGamer';
import FuncClientePage from './Componentes/PAGINAS/ClientPage';
import Carrinho from './Componentes/PAGINAS/Carrinho';
import PC1 from './Componentes/PAGINAS/PC1';
import PC2 from './Componentes/PAGINAS/PC2';
import PC3 from './Componentes/PAGINAS/PC3';
import PrivateRoute from './Componentes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Cabeçalho />
      <main>
        <Routes>
          <Route path="/" element={<HomeSlider/>}></Route>
          <Route path="/PCs-gamer" element={<PCgamer></PCgamer>}></Route>
          <Route path="/Monte-seu-PC" element={<PrivateRoute> 
                                                <MontePC/>
                                                </PrivateRoute>}></Route>
          <Route path="/Atendimento" element={<Atendimento />}></Route>
         <Route path = "/ClientPage" element ={ <PrivateRoute> 
                                                <FuncClientePage/>
                                                </PrivateRoute>}></Route>
          <Route path="/Carrinho" element={<PrivateRoute> 
                                            <Carrinho/>
                                            </PrivateRoute>}>
                                            </Route>
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
