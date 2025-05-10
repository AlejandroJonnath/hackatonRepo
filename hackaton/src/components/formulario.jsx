// src/components/Formulario.jsx
import { useState } from 'react';
import '../styles/formulario.css'; // Asegúrate de tener un archivo CSS para estilos


function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviado:', formData);
    // Aquí podrías hacer un fetch a tu API
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input name="nombre" placeholder="Nombre" onChange={handleChange} value={formData.nombre} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
      <textarea name="mensaje" placeholder="Mensaje" onChange={handleChange} value={formData.mensaje} required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
