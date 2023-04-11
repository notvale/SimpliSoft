import '../css/dashboard.css';
import carlos from '../images/carlos.png';
import React, { Fragment } from 'react';
import Contador from './Contador';

function Main({ totalTicketByStatus, numberTicket, view }) {

  const iconArray = ['las la-eye', 'las la-clock', 'las la-times-circle', 'las la-check-circle'];
  
  return (
    <Fragment>
      <main>
        <section>
          <h3 className="section-head">Resumen</h3>
          <div className="analytics">

            {view === 'Ticket' ? // Para la vista de Tickets
              (
                <>
                  <Contador nom_variable={'Tickets Abiertos: '} numberDevice={totalTicketByStatus[1]} typeIcon={iconArray[0]} />
                  <Contador nom_variable={'Tickets Pausados: '} numberDevice={totalTicketByStatus[2]} typeIcon={iconArray[1]} />
                  <Contador nom_variable={'Tickets Cerrados: '} numberDevice={totalTicketByStatus[0]} typeIcon={iconArray[2]} />
                  <Contador nom_variable={'Tickets Totales: '} numberDevice={numberTicket} typeIcon={iconArray[3]} />
                </>
              ) : view === 'Ordenes' ? // Para la vista de Ordenes
                (
                  <>
                    <Contador nom_variable={'Órdenes Sin Revisar: '} numberDevice={totalTicketByStatus[1]} typeIcon={iconArray[0]} />
                    <Contador nom_variable={'Órdenes Revisadas: '} numberDevice={totalTicketByStatus[2]} typeIcon={iconArray[1]} />
                    <Contador nom_variable={'Órdenes Reparadas: '} numberDevice={totalTicketByStatus[0]} typeIcon={iconArray[2]} />
                    <Contador nom_variable={'Órdenes Totales: '} numberDevice={numberTicket} typeIcon={iconArray[3]} />
                  </>
                ) : // Para la vista de Inicio
                (
                  <>
                    <Contador nom_variable={'Tickets Totales: '} numberDevice={numberTicket} typeIcon={iconArray[0]} />
                    <Contador nom_variable={'Órdenes Totales: '} numberDevice={numberTicket} typeIcon={iconArray[0]} />
                    <Contador nom_variable={'Equipos Totales: '} numberDevice={numberTicket} typeIcon={iconArray[0]} />
                    <Contador nom_variable={'Usuarios Totales: '} numberDevice={totalTicketByStatus[0]} typeIcon={iconArray[0]} />
                  </>
                )


            }


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