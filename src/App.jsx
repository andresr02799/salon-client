import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionSalones from './pages/gestionSalon';
import Login from './pages/login';
import FormReserva from './pages/formReserva';
import InicioSIRS from './pages/inicioSIRS';
import AsociarSalones from './pages/asociarSalones';

function App() {
  const [count, setCount, open, setOpen] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/salones' element={<GestionSalones />} />
        <Route path='/' element={<FormReserva />} />
        <Route path='/' element={<InicioSIRS />} />
        <Route path='/' element={<AsociarSalones />} />
      </Routes>
    </Router>
  );
}

export default App;
