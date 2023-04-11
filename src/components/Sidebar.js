import React from "react";
import '../css/dashboard.css';
import logo from '../images/logo.png';

function Sidebar() {

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
                <a href="" className="active">
                  <span className="las la-adjust"></span>
                  <span>Inicio</span>
                </a>
              </li>
              {/* Tickets */}
              <li>
                <a href="">
                  <span className="las la-ticket-alt"></span>
                  <span>Tickets</span>
                </a>
              </li>
              {/* Clientes */}
              <li>
                <a href="">
                  <span className="las la-user-friends"></span>
                  <span>Clientes</span>
                </a>
              </li>
              {/* órdenes */}
              <li>
                <a href="" >
                  <span className="las la-calendar"></span>
                  <span>Órdenes</span>
                </a>
              </li>
              <li>
                <a href="">
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