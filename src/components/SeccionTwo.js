import React from "react";
import "../css/style.css";
import saly26 from '../images/Assets/Saly-26.svg';
import saly42 from '../images/Assets/Saly-42.svg';
import saly45 from '../images/Assets/Saly-45.svg';

const SeccionTwo = () => {

    return (
        <section id="features" class="features">
        <div>
            <h1 class="features__title_1">
                ¿Porqué
            </h1>
            <h1 class="features__title_2">
                escogernos?
            </h1>
            <p class="features__subtitle">
                SimpliSoft una solución completa de gestión de tickets que le permite llevar un seguimiento de los
                problemas de sus clientes y solucionarlos de manera efectiva. Ahorra tiempo y aumenta la
                satisfacción de tu cliente.
            </p>
        </div>
        <ul class="features__list">
            <li>
                <img src={saly26} alt=""/>
                <p><strong>Automatiza tus procesos</strong></p>
            </li>
            <li>
                <img src={saly42} alt=""/>
                <p><strong>Centraliza la gestión de tickets</strong></p>
            </li>
            <li>
                <img src={saly45} alt=""/>
                <p><strong>Mejora la satisfacción del cliente</strong></p>
            </li>
        </ul>
    </section>  





    ); //fin
} // fin

export default SeccionTwo;