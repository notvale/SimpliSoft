import React from "react";

const Contador = ({ numberDevice, nom_variable, typeIcon }) => {
    return (
        
            <div className="analytic">
                <div className="analytic-icon">
                    <span className={typeIcon}></span>
                </div>
                <div className="analytic-info">
                    <h4>{nom_variable}</h4>
                    <h1>{numberDevice}</h1>
                </div>
            </div>




        // <div className="contador">
        //     <div className="titulo">
        //         {nom_variable}
        //     </div>
        //     <div className="cantidad">
        //         {numberDevice}
        //     </div>
        // </div>




    ) // fin
} // fin

export default Contador;