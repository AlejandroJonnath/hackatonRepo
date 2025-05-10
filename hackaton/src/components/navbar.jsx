import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../assets/logo.png';
import { useState } from 'react';

const translations = {
  es: {
    home: "Inicio",
    about: "Conócenos",
    donateHope: "Dona Esperanza",
    donateFood: "Dona Alimentos",
    donateMoney: "Dona Dinero",
    donateTime: "Dona Tiempo",
    findFood: "Encuentra Comida",
    orgs: "Organizaciones Sociales",
    families: "Programas de Atención a Familias",
    contact: "Contáctanos",
    donateNow: "DONAR AHORA",
  },
  en: {
    home: "Home",
    about: "About Us",
    donateHope: "Donate Hope",
    donateFood: "Donate Food",
    donateMoney: "Donate Money",
    donateTime: "Donate Time",
    findFood: "Find Food",
    orgs: "Social Organizations",
    families: "Family Care Programs",
    contact: "Contact Us",
    donateNow: "DONATE NOW",
  },
};

function Navbar() {
  const [language, setLanguage] = useState('es');

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation bar">
      <div className="navbar-left" role="banner">
        <img src={logo} alt="Logo del sitio" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <Link to="/" className="navbar-link">{translations[language].home}</Link>
        <Link to="/conocenos" className="navbar-link">{translations[language].about}</Link>

        <div className="navbar-dropdown">
          <span className="navbar-link">{translations[language].donateHope}</span>
          <div className="navbar-dropdown-content">
            <Link to="/dona-alimentos" className="navbar-dropdown-link">{translations[language].donateFood}</Link>
            <Link to="/dona-dinero" className="navbar-dropdown-link">{translations[language].donateMoney}</Link>
            <Link to="/dona-tiempo" className="navbar-dropdown-link">{translations[language].donateTime}</Link>
          </div>
        </div>

        <div className="navbar-dropdown">
          <span className="navbar-link">{translations[language].findFood}</span>
          <div className="navbar-dropdown-content">
            <Link to="/organizaciones-sociales" className="navbar-dropdown-link">{translations[language].orgs}</Link>
            <Link to="/programas-familias" className="navbar-dropdown-link">{translations[language].families}</Link>
          </div>
        </div>

        <Link to="/contactanos" className="navbar-link">{translations[language].contact}</Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-actions">
          <div className="language-selector">
            <button
              className={`language-button ${language === 'es' ? 'selected' : ''}`}
              onClick={() => setLanguage('es')}
              aria-label="Cambiar idioma a Español"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/197/197593.png"
                alt="Bandera de España"
                className="language-flag"
              />
            </button>
            <button
              className={`language-button ${language === 'en' ? 'selected' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/330/330425.png"
                alt="UK flag"
                className="language-flag"
              />
            </button>
          </div>
          <Link to="/donar" className="navbar-donate-button" aria-label={translations[language].donateNow}>
            {translations[language].donateNow}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
