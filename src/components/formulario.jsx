import React from 'react';
import TablaDatos from './tabla';

function Formulario(props) {
    return(
        <div class='mt-7 bg-midday rounded-md border-2 border-linecolor flex flex-col'>
            <h1 class=' text-center mt-9 text-[25px]'>GESTION SALÓN</h1>
            <hr class="my-10 text-linecolor mx-28"/>
            <TablaDatos />
        </div>
    )
}

export default Formulario;
