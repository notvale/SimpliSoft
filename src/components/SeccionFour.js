import React from "react";
import "../css/style.css"
import saly1 from '../images/Assets/Saly-1.svg';
import blobC from '../images/Assets/blobC.svg';

const SeccionFour = () => {

    return (
        <section class="learning">
            <h1 class="learning__title_1">
                Te ayudamos a mejorar
            </h1>
            <h1 class="learning__title_2">
                la gestión de tu negocio
            </h1>
            <img class="learning__illustration" src={saly1} alt="" />
            <img class="learning__background_blob" src={blobC} alt="" />
        </section>
    ); //fin
} // fin

export default SeccionFour;