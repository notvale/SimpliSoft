import React from "react";
import "../css/contador.css"
const Contador = ({ numberDevice, nom_variable }) => {
    return (

        <div className="contador">
            <div className="titulo">
                {nom_variable}
            </div>
            <div className="cantidad">
                {numberDevice}
            </div>
        </div>




    ) // fin
} // fin

export default Contador;