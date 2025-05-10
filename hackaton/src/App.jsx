import { useState } from 'react';
import './App.css';
import Inicio from './pages/inicio';
import Navbar from './components/navbar.jsx'; // Aquí importo el componente de la barra de navegación, pilas
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar /> {/*La barra de navegación siempre arriba*/ }
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Pueden agregar más rutas aquí si es necesario */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;