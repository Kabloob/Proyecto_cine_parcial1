import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './pages/registro';
import Login from './pages/login';
import Portal from './pages/portal';
import Admin from './pages/admin'; // Asegúrate de que el componente Admin esté creado
import './App.css'; // Importa estilos globales si los tienes

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/portal" element={<Portal />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/" element={<Login />} /> {/* Ruta por defecto */}
            </Routes>
        </Router>
    );
}

export default App;

