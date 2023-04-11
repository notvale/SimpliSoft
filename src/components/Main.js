import '../css/dashboard.css';
import carlos from '../images/carlos.png';
import React, { Fragment } from 'react';
import Contador from './Contador';

function Main({ totalTicketByStatus, numberTicket, view }) {
  return (
    <Fragment>
      <main>
        <section>
          <h3 className="section-head">Resumen</h3>
          <div className="analytics">

            {view === 'Ticket' ?
              (
                <>
                  <Contador nom_variable={'Tickes Abiertos: '} numberDevice={totalTicketByStatus[1]} typeIcon={'las la-eye'} />
                  <Contador nom_variable={'Tickes Pausados: '} numberDevice={totalTicketByStatus[2]} typeIcon={'las la-clock'} />
                  <Contador nom_variable={'Tickes Cerrados: '} numberDevice={totalTicketByStatus[0]} typeIcon={'las la-times-circle'} />
                  <Contador nom_variable={'Tickes Totales: '} numberDevice={numberTicket} typeIcon={'las la-check-circle'} />
                </>
              ) : <Contador nom_variable={'Tickes Totales: '} numberDevice={numberTicket} typeIcon={'las la-check-circle'} />}


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