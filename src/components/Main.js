import '../css/dashboard.css';
import carlos from '../images/carlos.png';
import React, { Fragment } from 'react';

function Main() {
  return (
    <Fragment>
    <main>
      <section>
        <h3 className="section-head">Resumen</h3>
        <div className="analytics">

{/* //Tarjeta 1 */}
          <div className="analytic">
            <div className="analytic-icon">
              <span className="las la-eye"></span>
            </div>
            <div className="analytic-info">
              <h4>Tickets Abiertos</h4>
              <h1>3</h1>
            </div>
          </div>

{/* //Tarjeta 2 */}

          <div className="analytic">
            <div className="analytic-icon">
              <span className="las la-clock"></span>
            </div>
            <div className="analytic-info">
              <h4>Tickets pausados</h4>
              <h1>25</h1>
            </div>
          </div>

{/* //Tarjeta 3 */}

          <div className="analytic">
            <div className="analytic-icon">
              <span className="las la-times-circle"></span>
            </div>
            <div className="analytic-info">
              <h4>Tickets cerrados</h4>
              <h1>10</h1>
            </div>
          </div>

{/* //Tarjeta 4 */}

          <div className="analytic">
            <div className="analytic-icon">
              <span className="las la-check-circle"></span>
            </div>
            <div className="analytic-info">
              <h4>Tickets totales</h4>
              <h1>50 <small className="text-success">15%</small></h1>
            </div>
          </div>
        </div>
      </section>

{/* Cuadro izquierdo */}
      <section>
        <div className="block-grid">
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

{/* Gráfico */}

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
        </div>
      </section>
    </main>
    </Fragment>
  );
}

export default Main;