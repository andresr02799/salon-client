import React from 'react';

function BotonesInicioSIRS(props) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  };

  const buttonStyle = {
    marginTop: '0.5 rem', // Ajusta este valor según tus preferencias
  };

  return (
    <div style={containerStyle}>
      <button
        type="submit"
        className="text-whitetext bg-midnight hover-bg-midnightdark font-medium rounded-lg text-lg w-full sm:w-auto px-16 py-2.5"
        style={buttonStyle}
      >
        {props.texto}
      </button>
    </div>
  );
}

export default BotonesInicioSIRS;

