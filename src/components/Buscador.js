import React from "react";
import "../css/formulario.css"
import { useEffect, useState } from 'react';

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
                    className="form-input" 
                    id="nombre"
                    onInput={manejarCambio}                     
            />
        </form>


    ); //fin
} // fin

export default Buscador;