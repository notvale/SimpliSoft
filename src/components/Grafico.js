import React from "react";
import { useEffect, useState } from 'react';
import carlos from '../images/carlos.png';

const Grafico = () => {

    return (
        <div className="graph-class">
            <h3 className="section-head">Gráfico</h3>
            <div className="graph-content">
                <div className="graph-head">
                    <div className="icons-wrapper">
                        <div className="icon">
                            <span className="las la-eye text-main"></span>
                        </div>
                        <div className="icon">
                            <span className="las la-clock text-success"></span>
                        </div>
                    </div>
                    <div className="graph-select">
                        <select name="" id="">
                            <option value="">September</option>
                        </select>
                    </div>
                </div>
                <div className="graph-board">
                    <canvas id="revenueChart" width="100%"></canvas>
                </div>
            </div>
        </div>

    ); //fin
} // fin

export default Grafico;