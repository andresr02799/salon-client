import React from 'react';
import HeaderBar from '../components/header';
import SideBarPosgrados from '../components/sideBarPosgrados';
import BotonesInicioSIRS from '../components/botonesInicioSIRS';

function InicioSIRS() {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-2 m-7">
        <SideBarPosgrados />
      </div>
      <div className="col-span-8 my-7 mr-7">
        <HeaderBar username="Area de Posgrados" />
        <h1 className="text-4xl text-center mt-3 mb-5">BIENVENIDO AL SISTEMA SIRS</h1>
        <div className="flex justify-start items-start h-screen">
          <div className="w-80 h-68 p-5 border border-linecolor rounded-md relative left-10 top-16">
            <h1 className="text-2xl text-center mb-4">SALONES</h1>
            <BotonesInicioSIRS texto="GESTIONAR SALONES" />
          </div>
          <div className="w-80 h-68 p-5 border border-linecolor rounded-md mx-4 relative left-10 top-16">
            <h1 className="text-2xl text-center mb-4">RESERVAS</h1>
            <BotonesInicioSIRS texto="GESTIONAR RESERVAS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioSIRS;
