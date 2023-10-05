import React from "react";
import HeaderBar from "../components/header";
import Formulario from "../components/formulario";
import SideBarPosgrados from "../components/sideBarPosgrados";

function GestionSalones() {
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

export default GestionSalones;
