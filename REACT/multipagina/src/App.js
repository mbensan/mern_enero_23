import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import Contacto from './pages/Contacto';
import Bloques from './pages/Bloques';
import Saludar from './pages/Saludar';

import Navbar from './components/Navbar';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/bloques' element={<Bloques />} />
            <Route path='/saludar/:nombre' element={<Saludar />} />
            
          </Routes>
          <footer>
            Fin de nuestra App
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
