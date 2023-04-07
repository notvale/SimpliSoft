import React from "react";
import "../css/contador.css"
const Contador = ({ numberDevice, nom_variable }) => {
    return (

        <div className="contador">
            <div>

                <h6>{nom_variable}</h6>
            </div>
            {numberDevice}
        </div>





    ) // fin
} // fin

export default Contador;