import React from "react";
import "../css/style.css"
import saly31 from '../images/Assets/Saly-31.svg';
import blobB from '../images/Assets/blobB.svg';

const SeccionThree = () => {

    return (
        <section class="get-feedback">
            <h1 class="get-feedback__title_1">
                Conecta con tus clientes
            </h1>
            <h1 class="get-feedback__title_2">
                de una mejor manera
            </h1>
            <img class="get-feedback__illustration" src={saly31} alt="" />
            <img class="get-feedback__background_blob" src={blobB} alt="" />
        </section>

    ); //fin
} // fin

export default SeccionThree;