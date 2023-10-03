import React, { useState } from 'react'
import './App.css'
import Boton from './components/botton';
import HeaderBar from './components/header';
import SideBarPosgrados from './components/sideBarPosgrados';
import Formulario from './components/formulario';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class='grid grid-cols-10 h-screen'>
      <div class='col-span-2 m-7'>
        <SideBarPosgrados />
      </div>
      <div class='col-span-8 my-7 mr-7'>
        <HeaderBar username='Area de Posgrados'/>
        <Formulario />
      </div>
    </div>
  );
}

export default App;
