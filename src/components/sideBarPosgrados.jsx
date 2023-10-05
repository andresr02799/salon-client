import React from 'react';

function SideBarPosgrados() {
    return(
        <div class="h-full bg-midday rounded-md border-2 border-linecolor">
            <div class="logo p-2.5 mt-1 flex items-center">
                <h1 className='font-bold text-gray-950 text-[40px] ml-1'>LOGO</h1>
                <i class="bi bi-list px-14 rounded-md cursor-pointer text-[40px]"></i>
            </div>

            <hr class="my-2 text-linecolor"/>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-resaltar">
                <i class="bi bi-calendar-week text-gray-950 text-[25px]"></i>
                <span class="text-[25px] ml-4 text-gray-950">Rerservar</span>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-resaltar">
                <i class="bi bi-info-circle text-gray-950 text-[25px]"></i>
                <span class="text-[25px] ml-4 text-gray-950">Incidencias</span>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-resaltar">
                <i class="bi bi-window-plus text-gray-950 text-[25px]"></i>
                <span class="text-[25px] ml-4 text-gray-950">Solicitudes</span>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-resaltar">
                <i class="bi bi-buildings text-gray-950 text-[25px]"></i>
                <span class="text-[25px] ml-4 text-gray-950">Salones</span>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-resaltar">
                <i class="bi bi-clipboard-data text-gray-950 text-[25px]"></i>
                <span class="text-[25px] ml-4 text-gray-950">Estadisticas</span>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-resaltar">
                <i class="bi bi-person-plus text-gray-950 text-[25px]"></i>
                <span class="text-[25px] ml-4 text-gray-950">Crear Usuario</span>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-resaltar">
                <i class="bi bi-box-arrow-right text-gray-950 text-[25px]"></i>
                <span class="text-[25px] ml-4 text-gray-950">Salir</span>
            </div>

            <hr class="my-2 text-linecolor"/>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-8 duration-300 cursor-pointer hover:bg-gray-200">
                <i class="bi bi-telephone-forward text-gray-950 text-[30px]"></i>
                <span class="text-[20px] ml-4 text-gray-950">Contactanos 3222222222</span>
            </div>

        </div>
    )
}

export default SideBarPosgrados;