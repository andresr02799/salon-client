import React, { useState } from 'react'
import './App.css'
import GestionSalones from './pages/gestionSalon';
import Modal from './components/model';

function App() {
  const [count, setCount, open, setOpen] = useState(0)

  return (
    <div>
      <GestionSalones />
    </div>
  );
}

export default App;
