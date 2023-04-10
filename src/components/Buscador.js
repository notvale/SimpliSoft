import React from "react";
import "../css/formulario.css"
import { useEffect, useState } from 'react';
import '../css/buscador.css'

const Buscador = ( {numberOfDevicesByUsernamePage ,findAllDevicesByUsernamePage} ) => {
    const [username, setUsername] = useState('');
    
    
    const manejarCambio = (evento) => {
        setUsername(evento.target.value);
        numberOfDevicesByUsernamePage(username);
        findAllDevicesByUsernamePage(username);
      };

    return (
        <form className="row">
            <input 
                    type="text" 
                    placeholder="Ingresa nombre" 
                    className="buscador" 
                    id="nombre"
                    onInput={manejarCambio}                     
            />
        </form>


    ); //fin
} // fin

export default Buscador;