import React from "react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/style.css"
import LogovectorLogoNav from '../images/Assets/LogovectorLogoNav.svg';
const HeaderLanding = () => {

    return (
        <header id="header" class="header">
            <img src={LogovectorLogoNav} class="logo" alt="SimpliSoft" id="header-img" />
            <nav id="nav-bar" class="nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a class="nav-link" href="#features">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#how-it-works">Precio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#get-started">Recursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-cta" href="#subscribe">Clientes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Tracking">Seguimiento</a>
                    </li>
                </ul>
            </nav>
            <Link to='/LoginPage'>
                <button class="btn btn-primary" type="button">Login</button>
            </Link>
        </header>
    ); //fin
} // fin

export default HeaderLanding;