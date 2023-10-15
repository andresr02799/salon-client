import React from 'react';
import HeaderBar from '../components/header';
import SideBarPosgrados from '../components/sideBarPosgrados';

function AsociarSalones() {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-2 m-7">
        <SideBarPosgrados />
      </div>
      <div className="col-span-8 my-7 mr-7">
        <HeaderBar username="Área de Posgrados" />
        <div className="text-center mt-5">
          {/* Espacio en blanco para el formulario */}
        </div>
      </div>
    </div>
  );
}

export default AsociarSalones;
