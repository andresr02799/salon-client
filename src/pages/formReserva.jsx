import React from "react";
import HeaderBar from "../components/header";
import SideBarFormReserva from "../components/sideBarFormReserva";
import BotonReservar from '../components/botonReservar';

function FormReserva() {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-2 m-7">
        <SideBarFormReserva />
      </div>
      <div className="col-span-8 my-7 mr-7">
        <HeaderBar username="Coordinador" />

        <div className="flex justify-center">
          <div className="mt-7 bg-midday rounded-md border-2 border-linecolor p-7 w-4/5">
            <div className="flex justify-between mb-4">
              
            </div> 

            <h1 className="text-center mt-4 text-[30px] text-gray-900">
              Diligencia el formulario para realizar la reserva
            </h1>

            <form className="p-7">
              <div className="m-3">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Materia*
                </label>
                <input
                  type="text"
                  className="w-full border border-linecolor text-base rounded-lg focus:border-midday p-2.5"
                  placeholder="Ingrese la materia"
                  required
                />
              </div>

              <div className="m-3">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Capacidad*
                </label>
                <input
                  type="number"
                  className="w-full border border-linecolor text-base rounded-lg focus-border-midday p-2.5"
                  placeholder="Ingrese la capacidad"
                  required
                />
              </div>

              <div className="m-3">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Fecha inicio*
                </label>
                <input
                  type="date"
                  className="w-full border border-linecolor text-base rounded-lg focus-border-midday p-2.5"
                  required
                />
              </div>

              <div className="m-3">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Fecha Fin*
                </label>
                <input
                  type="date"
                  className="w-full border border-linecolor text-base rounded-lg focus-border-midday p-2.5"
                  required
                />
              </div>

              <div className="m-3">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Actividad*
                </label>
                <input
                  type="text"
                  className="w-full border border-linecolor text-base rounded-lg focus-border-midday p-2.5"
                  placeholder="Ingrese la actividad"
                  required
                />
              </div>

                <div className="mt-7 text-center">
                    <BotonReservar nameBoton="RESERVAR" /> {/* Utiliza el nuevo componente BotonReservar */}
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormReserva;
