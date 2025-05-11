import React, { useState, useRef, useEffect } from 'react';
import '../styles/NavBar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    queDonar: false,
    lugares: false,
  });

  const navbarRef = useRef(null);
  // Ref para saber si el click fue en un toggle
  const ignoreCloseRef = useRef(false);

  // Cierra el menú y los dropdowns al hacer click fuera
  useEffect(() => {
    const handleClick = (e) => {
      if (ignoreCloseRef.current) {
        ignoreCloseRef.current = false;
        return;
      }
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
        setDropdownOpen({ queDonar: false, lugares: false });
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Toggle para dropdowns (independientes)
  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Cierra dropdowns al hacer mouse leave en desktop
  const handleDropdownMouseLeave = (dropdown) => {
    if (window.innerWidth > 600) {
      setDropdownOpen((prev) => ({
        ...prev,
        [dropdown]: false,
      }));
    }
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      {/* Ícono hamburguesa a la izquierda */}
      <button
        className="navbar-hamburger"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>☰</span>
      </button>

      {/* Logo a la derecha */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Enlaces principales al centro */}
      <ul className={`navbar-center${menuOpen ? ' open' : ''}`}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Conócenos</a></li>

        <li
          className={`dropdown${dropdownOpen.queDonar ? ' open' : ''}`}
          onMouseEnter={() => {
            if (window.innerWidth > 600) setDropdownOpen((prev) => ({ ...prev, queDonar: true }));
          }}
          onMouseLeave={() => handleDropdownMouseLeave('queDonar')}
        >
          <button
            className="dropdown-toggle"
            type="button"
            onClick={e => {
              e.stopPropagation();
              ignoreCloseRef.current = true;
              handleDropdownToggle('queDonar');
            }}
            aria-expanded={dropdownOpen.queDonar}
          >
            ¿Qué Donar?
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Alimento</a></li>
            <li><a href="#">Dinero</a></li>
            <li><a href="#">Voluntariado</a></li>
          </ul>
        </li>

        <li
          className={`dropdown${dropdownOpen.lugares ? ' open' : ''}`}
          onMouseEnter={() => {
            if (window.innerWidth > 600) setDropdownOpen((prev) => ({ ...prev, lugares: true }));
          }}
          onMouseLeave={() => handleDropdownMouseLeave('lugares')}
        >
          <button
            className="dropdown-toggle"
            type="button"
            onClick={e => {
              e.stopPropagation();
              ignoreCloseRef.current = true;
              handleDropdownToggle('lugares');
            }}
            aria-expanded={dropdownOpen.lugares}
          >
            Lugares
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Organizaciones</a></li>
            <li><a href="#">Programas Sociales</a></li>
          </ul>
        </li>

        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Botón "Donar Ahora" centrado */}
      <div className="navbar-right">
        <button className="animated-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text">Donar Ahora</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;