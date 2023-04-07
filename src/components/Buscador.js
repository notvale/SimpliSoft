import React from "react";
import "../css/formulario.css"
import { useEffect, useState } from 'react';

const usernameInit = {
    "nombre":""
}

const Buscador = ( {numberOfDevicesByUsernamePage} ) => {
    const [username, setUsername] = useState(usernameInit);
    const {nombre} = username;

    const handleInputChange = (e) => {
        console.log(e);
        const handleFormValue = {
            username,
            [e.target.name]: e.target.value,
        }
        setUsername(handleFormValue)
        console.log(username);
    }

    return (
        <form className="row">
            <input 
                    type="text" 
                    placeholder="Ingresa nombre" 
                    className="form-input" 
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}                        
            />
            <button class="btn btn-primary" type="button" onClick={()=>numberOfDevicesByUsernamePage(username.nombre)} > Buscar </button>
        </form>


    ); //fin
} // fin

export default Buscador;