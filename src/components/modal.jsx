import React from "react";

export const Modals = ({onCancel, closeModal, instruccion, icono, leyenda, clickBotonPrincipal }) => {
  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
    }}>
        <div class="absolute bg-blackout opacity-80 inset-0 z-0"></div>
        <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-whitetext">
            <div className="modal-header text-redUnicauca cursor-pointer text-2xl text-end" onClick={() => closeModal("Modal was closed")}>
                <p className="close">&times;</p>
            </div>
            <div class=''>
                <div className="text-center p-5 flex-auto justify-center">
                    <i class={icono}></i>
                    <h2 class="text-xl font-bold py-4">¿Está seguro(a)?</h2>
                    <p class="text-sm text-gray-500 px-8">{leyenda}</p>
                </div>
                <div  class="p-3 mt-2 text-center space-x-4 md:block">
                    <button className="mb-2 md:mb-0 bg-whitetext px-5 py-2 text-sm shadow-sm font-medium tracking-wider border rounded-full hover:shadow-lg hover:bg-midday hover:border-linecolor" onClick={() => onCancel("Cancel button was clicked")}>
                        Cancel
                    </button>
                    <button className="mb-2 md:mb-0 bg-redUnicauca hover:bg-redUnicaucadark border border-redUnicauca px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-whitetext rounded-full hover:shadow-lg hover:border-redUnicaucadark" onClick={clickBotonPrincipal}>
                        {instruccion}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};