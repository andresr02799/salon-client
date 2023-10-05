import React from 'react'

function Boton(props) {
    
    return(
        <button type="submit" class=" text-whitetext bg-midnight hover:bg-midnightdark font-medium rounded-lg text-lg w-full sm:w-auto px-16 py-2.5 text-center">{props.nameBoton}</button>
    )
    
}

export default Boton;