import '../css/dashboard.css';
import carlos from '../images/carlos.png';
import React, { Fragment } from 'react';
import Contador from './Contador';
import Profit from './Profit';
import Grafico from './Grafico';
import Table from '../components/Table';
import Buscador from '../components/Buscador';
import TableTicket from './TableTicket';
import TableOrder from './TableOrder';
import TableUser from './TableUser';

function Main({ totalTicketByStatus, numberTicket, view, numberOrder, numberStatusOrder, numberOfUsers, numberDevice,
                deviceDeletePage, deviceByUser, device, numberOfDevicesByUsernamePage, findAllDevicesByUsernamePage,
                username, setUsername, tickets,order, user, totalByRole }) {

  const iconArray = ['las la-eye', 'las la-clock', 'las la-times-circle', 'las la-check-circle'];

  return (
    <Fragment>
      <main className='mainDashboard'>
        <section>
          
            <h3 className="section-head">Resumen { view } </h3>
            {/* Buscador que filtra por nombre del cliente */}
            <Buscador numberOfDevicesByUsernamePage = {numberOfDevicesByUsernamePage} 
              findAllDevicesByUsernamePage = {findAllDevicesByUsernamePage} username={username} setUsername={setUsername}/>

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
                    <Contador nom_variable={'Clientes: '} numberDevice={totalByRole[2]} typeIcon={iconArray[0]} />
                    <Contador nom_variable={'Técnicos: '} numberDevice={totalByRole[1]} typeIcon={iconArray[1]} />
                    <Contador nom_variable={'Administradores: '} numberDevice={totalByRole[0]} typeIcon={iconArray[2]} />
                    <Contador nom_variable={'Totales: '} numberDevice={numberOfUsers} typeIcon={iconArray[3]} />
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

        {view === 'General' ? // Vista General
          (
            <section>
              <div className="block-grid">
                {/* Cuadro de Ganancias */}
                <Profit />
                {/* Gráfico */}
                <Grafico />
              </div>
            </section>
          ): view === 'de Tickets' ? // Tabla de Tickets
          (
            <section>
              <div className="block-grid">
                <TableTicket tickets={tickets} />
              </div>
            </section>
          ): view === 'de Órdenes' ? // Tabla de Órdenes
          (
            <section>
              <div className="block-grid">
                <TableOrder order={order} />
              </div>
            </section>
          ): view === 'de Usuarios' ? // Tabla de Órdenes
          (
            <section>
              <div className="block-grid">
                <TableUser user={user} />
              </div>
            </section>
          ):
          (
            <section> 
              <div className="block-grid">
                <Table device = {Object.keys(deviceByUser).length === 0 ? device : deviceByUser} deviceDeletePage={deviceDeletePage} />
                
              </div>
            </section>
          )
        }
      </main>
    </Fragment>
  );
}

export default Main;