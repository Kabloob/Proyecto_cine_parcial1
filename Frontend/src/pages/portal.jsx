import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/portal.css';

function Portal() {
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert("Debes iniciar sesión primero.");
      navigate("/login");
    } else {
      mostrarCartelera(); // Ejecutar la función al cargar el componente
    }
  }, []);

  const mostrarCartelera = () => {
    // Obtener películas guardadas en localStorage
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    setPeliculas(peliculasGuardadas); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token
    navigate("/login");
  };
  return (
    <div>
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
        <button id="cerrar-seccion" onClick={handleLogout}>Salir</button> {/* Cambiado a botón */}
      </header>
      <main id="cartelera">
        {peliculas.length > 0 ? (
          peliculas.map((pelicula, index) => (
            <div className="pelicula" key={index}>
              <img src={pelicula.portada} alt={pelicula.titulo} />
              <h2>{pelicula.titulo}</h2>
              <p>Duración: {pelicula.duracion}</p>
              <p>Género: {pelicula.genero}</p>
              <p>Clasificación: {pelicula.clasificacion}</p>
              <p>Formato: {pelicula.formato}</p>
              <p>Horario: {pelicula.horario}</p>
              <p>Sala: {pelicula.sala}</p>
            </div>
          ))
        ) : (
          <p>No hay películas disponibles en la cartelera.</p>
        )}
      </main>
    </div>
  );
}

export default Portal;