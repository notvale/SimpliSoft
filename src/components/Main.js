import '../css/dashboard.css';
import carlos from '../images/carlos.png';
import React, { Fragment } from 'react';
import Contador from './Contador';
import Profit from './Profit';
import Grafico from './Grafico';

function Main({ totalTicketByStatus, numberTicket, view, numberOrder, numberStatusOrder, numberOfUsers, numberDevice }) {

  const iconArray = ['las la-eye', 'las la-clock', 'las la-times-circle', 'las la-check-circle'];

  return (
    <Fragment>
      <main>
        <section>
          <h3 className="section-head">Resumen {view}</h3>

          <div className="analytics">
            {view === 'de Tickets' ? // Para la vista de Tickets
              (
                <>
                  <Contador nom_variable={'Abiertos: '} numberDevice={totalTicketByStatus[1]} typeIcon={iconArray[0]} />
                  <Contador nom_variable={'Pausados: '} numberDevice={totalTicketByStatus[2]} typeIcon={iconArray[1]} />
                  <Contador nom_variable={'Cerrados: '} numberDevice={totalTicketByStatus[0]} typeIcon={iconArray[2]} />
                  <Contador nom_variable={'Totales: '} numberDevice={numberTicket} typeIcon={iconArray[3]} />
                </>
              ) : view === 'de Usuarios' ? // Para la vista de Ordenes
                (
                  <>
                    <Contador nom_variable={'Clientes: '} numberDevice={numberStatusOrder[0]} typeIcon={iconArray[0]} />
                    <Contador nom_variable={'Técnicos: '} numberDevice={numberStatusOrder[1]} typeIcon={iconArray[1]} />
                    <Contador nom_variable={'Administradores: '} numberDevice={numberStatusOrder[2]} typeIcon={iconArray[2]} />
                    <Contador nom_variable={'Totales: '} numberDevice={numberOrder} typeIcon={iconArray[3]} />
                  </>
                ) : view === 'de Órdenes' ? // Para la vista de Ordenes
                  (
                    <>
                      <Contador nom_variable={'Sin Revisar: '} numberDevice={numberStatusOrder[0]} typeIcon={iconArray[0]} />
                      <Contador nom_variable={'Revisadas: '} numberDevice={numberStatusOrder[1]} typeIcon={iconArray[1]} />
                      <Contador nom_variable={'Reparadas: '} numberDevice={numberStatusOrder[2]} typeIcon={iconArray[2]} />
                      <Contador nom_variable={'Totales: '} numberDevice={numberOrder} typeIcon={iconArray[3]} />
                    </>
                  ) : // Para la vista de Inicio
                  (
                    <>
                      <Contador nom_variable={'Tickets Totales: '} numberDevice={numberTicket} typeIcon={iconArray[0]} />
                      <Contador nom_variable={'Órdenes Totales: '} numberDevice={numberOrder} typeIcon={iconArray[0]} />
                      <Contador nom_variable={'Equipos Totales: '} numberDevice={numberDevice} typeIcon={iconArray[0]} />
                      <Contador nom_variable={'Clientes Totales: '} numberDevice={numberOfUsers} typeIcon={iconArray[0]} />
                    </>
                  )
            }
          </div>
        </section>

        {view === 'General' ? // Para la vista de Tickets
          (
            <section>
              <div className="block-grid">
                {/* Cuadro de Ganancias */}
                <Profit />
                {/* Gráfico */}
                <Grafico />
              </div>
            </section>
          ):
          (<></>)
}
      </main>
    </Fragment>
  );
}

export default Main;