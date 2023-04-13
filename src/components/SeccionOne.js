import React from "react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/style.css"
import blobA from '../images/Assets/blobA.svg'
import Saly13 from '../images/Assets/Saly13.svg'
const SeccionOne = () => {

    return (
        <section class="intro">
            <h1 class="intro__title_1">
                Simplifica tu negocio
            </h1>
            <h1 class="intro__title_2">
                con nuestra plataforma
            </h1>
            <p class="intro__subtitle">
                SimpliSoft: La solución ideal para simplificar y mejorar la eficiencia de tu servicio técnico. Únete a
                la comunidad de pymes que confían en nosotros y simplifica tu negocio hoy mismo.
            </p>
            <a href="#" class="button">Pruébalo ahora</a>
            <img class="intro__illustration" src={Saly13} alt="" />
            <img class="intro__background_blob" src={blobA} alt="" />
        </section>





    ); //fin
} // fin

export default SeccionOne;