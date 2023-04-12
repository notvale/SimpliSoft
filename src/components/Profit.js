import React from "react";
import { useEffect, useState } from 'react';
import carlos from '../images/carlos.png';

const Profit = () => {


    return (
        <div className="revenue-card">
            <h3 className="section-head">Ingresos totales</h3>
            <div className="rev-content">
                <img src={carlos} alt="Carlos" />
                <div className="rev-info">
                    <h3>Carlos Riquelme</h3>
                    <h1>50 <small>Tickets</small></h1>
                </div>
                <div className="rev-sum">
                    <h4>Ganancias mensuales</h4>
                    <h2>$350,000</h2>
                </div>
            </div>
        </div>

    ); //fin
} // fin

export default Profit;