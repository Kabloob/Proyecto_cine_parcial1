import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState(''); // Cambiado a 'correo'
  const [clave, setClave] = useState('');
  const [clave1, setClave1] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (clave !== clave1) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo, // Cambiado de 'email' a 'correo'
          password: clave, // Asegúrate que el campo se llame 'password'
          cedula,
          telefono,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registro exitoso. Serás redirigido al inicio de sesión.");
        // Limpiar los campos del formulario
        setNombre('');
        setApellido('');
        setCorreo(''); // Limpiar 'correo'
        setCedula('');
        setTelefono('');
        setClave('');
        setClave1('');
        navigate("/login");
      } else {
        alert(data.message || "Error en el registro.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión. Verifica si el servidor está en ejecución.");
    }
  };

  return (
    <div>
      <video autoPlay muted loop playsInline id="background-video">
        <source src="../images/fondo-login.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <header>
        <button id="logo">
          <img src="../images/logo.png" alt="Cartelera" id="header-img" />
        </button>
        <nav>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <h2>¡Regístrate!</h2>
        <form id="registro-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            id="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="email" // Cambiado a 'email' para el tipo correcto
            id="correo" // Cambiado de 'email' a 'correo'
            placeholder="Correo Electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            id="clave"
            placeholder="Contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
          <input
            type="password"
            id="clave1"
            placeholder="Confirmar Contraseña"
            value={clave1}
            onChange={(e) => setClave1(e.target.value)}
            required
          />
          <input
            type="text"
            id="cedula"
            placeholder="Cédula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
          <input
            type="text"
            id="telefono"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <button type="submit" id="registro-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
