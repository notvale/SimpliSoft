import React, { useState } from "react";
import '../css/dashboard.css';
import logo from '../images/logo.png';

function Sidebar({ view, setView }) {

  //Función que asigna el valor a view cuando se hace clic en el menu lateral
  const handleClick = (clic) => {  
    // event.preventDefault(); // Evita la recarga de la página
    setView(clic);
    console.log('Enlace clicado! ' + view);
    
  }

  return (
    <>
      <input type="checkbox" name="" id="menu-toggle" />

      <div className="sidebar">
        <div className="sidebar-container">

          {/* "Logo + Simplisoft" en la parte superior del menú Lateral*/}
          
          <div className="brand">
            <h2>
              <span className="logo">
                <img src={logo} alt="logo-Simplisoft" />
              </span>
              SimpliSoft
            </h2>
          </div>
          
          {/* Carlos Riquelme */}
          
          <div className="sidebar-avatar">
            {/* <div>
              <span className="icono-user">
                <img src="" alt="" />
              </span>
            </div> */}
            <div className="avatar-info">
              <div className="avatar-text">
                <h4>Carlos Riquelme</h4>
                <small>1029-1234-2345</small>
              </div>
              <span className="las la-angle-double-down"></span>
            </div>
          </div>
          
          {/* Panel de vistas */}
          
          <div className="sidebar-menu">
            <ul>
              {/* Inicio */}
              <li> 
                < a href="#" className="active" onClick={() => handleClick("General")} >
                  <span className="las la-adjust"></span>                 
                  <span>Inicio</span>
                </a>
              </li>
              {/* Tickets */}
              <li>
                <a href="#" onClick={() => handleClick("de Tickets")} >
                  <span className="las la-ticket-alt"></span>
                  <span>Tickets</span>
                </a>
              </li>
              {/* Órdenes */}
              <li>
                <a href="#" onClick={() => handleClick("de Órdenes")} >
                  <span className="las la-calendar"></span>
                  <span>Órdenes</span>
                </a>
              </li>
              {/* Clientes */}
              <li>
                <a href="#" onClick={() => handleClick("de Usuarios")} >
                  <span className="las la-user-friends"></span>
                  <span>Clientes</span>
                </a>
              </li>
              {/* Cuenta */}
              <li>
                <a href="#" onClick={() => handleClick("Cuenta")} >
                  <span className="las la-user"></span>
                  <span>Cuenta</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;