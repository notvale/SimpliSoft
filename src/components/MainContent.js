import React from 'react';
import '../css/dashboard.css';

function MainContent() {
  return (
    <div className="main-content">
      <header>
        <div className="header-title-wrapper">
          <label htmlFor="">
            <span className="las la-bars"></span>
          </label>
          <div className="header-title">
            <h1>¡Bienvenido, Carlos!</h1>
            <p>Revisa los datos de tu negocio en tiempo real<span className="las la-charts"></span></p>
          </div>
        </div>
        
        <div className="header-action">
          <button className="btn btn-main">
            <span className="las la-user"></span>
            Mi cuenta
          </button>
        </div>
      </header>
    </div>
  );
}

export default MainContent;