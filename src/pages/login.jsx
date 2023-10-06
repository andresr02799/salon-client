import React from "react";
import InputText from "../components/inputText";
import Boton from "../components/botton";
import Formulario from "../components/formulario";

function Login() {
    return (
        <div class=" bg-midnight h-screen flex justify-center align-middle items-center">
            <div class="bg-whitetext p-8 rounded shadow-lg w-96">
                <form class="flex flex-col items-center p-5">
                    <h1 class="font-bold text-[35px]">LOGIN</h1>
                    <InputText nameLabel="Correo*" typeInput="email" placeholder="Ingrese el correo electronico" />
                    <InputText nameLabel="Contrasena*" typeInput="password" placeholder="Ingrese la contrasena"/>
                    <Boton nameBoton='INICIAR'/>
                </form>
            </div>
        </div>
    );
}

export default Login;
