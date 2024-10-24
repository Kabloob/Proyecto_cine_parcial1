import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css';

function Login() {
    const [correo, setCorreo] = useState(''); // Cambiado de 'email' a 'correo'
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/login', { // Ajusta la URL si es necesario
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo, // Cambiado de 'email' a 'correo'
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token); // Guarda el token en localStorage
                alert("Bienvenido, Cliente.");
                navigate("/portal"); // Redirige a la página del portal
            } else {
                alert("Correo o contraseña incorrectos: " + data.message);
            }
        } catch (error) {
            alert("Error de conexión.");
        }
    };

    return (
        <div>
            <video autoPlay muted loop playsInline id="background-video">
                <source src="/images/fondo-login.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
            <header>
                <button id="logo">
                    <img src="/images/logo.png" alt="Cartelera" id="header-img" />
                </button>
                <nav>
                    <ul>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#planes">Planes</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li>
                            <Link to="/registro">
                                <button id="registro">Regístrate</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <h2>¡Inicia Sesión!</h2>
                <form id="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="correo" // Cambiado de 'email' a 'correo'
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)} // Cambiado de 'setEmail' a 'setCorreo'
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" id="login-button">Iniciar sesión</button>
                </form>
                <p id="recuperar"><a href="#">Recordar contraseña</a></p>
            </div>
        </div>
    );
}

export default Login;
