import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
      <Link to="/nosotros" style={{ marginRight: '1rem' }}>Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
