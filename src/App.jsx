import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionSalones from './pages/gestionSalon';
import Login from './pages/login';

function App() {
  const [count, setCount, open, setOpen] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/salones' element={<GestionSalones />} />
      </Routes>
    </Router>
  );
}

export default App;
