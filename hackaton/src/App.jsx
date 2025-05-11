import './App.css';
import Inicio from './pages/inicio';
import Navbar from './components/navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar /> {/* Barra de navegación */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} /> {/* Ruta para la página de inicio */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;