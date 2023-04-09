import React from 'react';
import { useEffect, useState } from 'react';
import Table from '../components/Table';
import Contador from '../components/Contador';
import Formulario from '../components/Formulario';
import Buscador from '../components/Buscador';
import {
    deviceFindAllService, deviceRegisterService, deviceUpdateService, deviceDeleteService, findAllDevicesByUsernameService,
    numberOfDevicesService, numberOfDevicesByUsernameService
} from '../services/DeviceService';
import { numberOfTicketsService,numberOfTicketByStatusService } from '../services/TicketService';
import { numberOfOrdersService, registerOrderService } from '../services/OrderService';
import { UserstByRoleService, numberOfUsersService, numberOfUserstByRoleService } from '../services/UserService';
import "../css/PageTable.css"

const TablePage = () => {
    /*
        Declaración de useState
    */
    // DEVICE: useState para registrar DEVICE
    const [device, setDevice] = useState([]);
    // DEVICE: useState para N° de Device
    const [numberDevice, setNumberDevice] = useState(0);
    // DEVICE: useState para mostrar los equipos de un usuario
    const [deviceByUser, setDeviceByUser] = useState({});
    // DEVICE: useState para N° de equipos por usuario
    const [totalByUser, setTotalByUser] = useState(0);
    // DEVICE: useState para editar equipo
    const [deviceEdit, setDeviceEdit] = useState(null);
    // TICKET: useState para N° de Ticket
    const [numberTicket, setNumberTicket] = useState(0);
    // TICKET: useState para N° de Tickets por status
    const[totalTicketByStatus, setTotalTicketByStatus] = useState(0);
    // ORDER: useState para N° de Ordenes
    const [numberOrder, setNumberOrder] = useState(0);
    // USER: useState para mostrar a los usuarios segun su role
    const [userByRole, setUserByRole] = useState({});
    // USER: useState para N° de usuarios totales
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    // USER: useState para N° de usuarios por Role
    const [totalByRole, setTotalByRole] = useState(0);
    //--------------------------------------------
    // Funciones para los Devices
    //--------------------------------------------
    // DEVICE: Función retorna TODOS los equipos
    const deviceFindAllPage = async () => {
        setDevice(await deviceFindAllService());
        numberOfDevicesPage();
        numberOfDevicesByUsernamePage();
        numberOfTicketsPage();
        numberOfOrdersPage();
        findAllDevicesByUsernamePage();
        UserstByRolePage();
        numberOfUsersPage();
        numberOfUserstByRolePage();
        numberOfTicketByStatusPage();
    }

    // DEVICE: Función retorna "CANTIDAD" de equipos totales
    const numberOfDevicesPage = async () => {
        setNumberDevice(await numberOfDevicesService());
    }
    // DEVICE: Retorna todos los equipos asociados a un username
    const findAllDevicesByUsernamePage = async (username) => {
        setDeviceByUser(await findAllDevicesByUsernameService(username));
        console.log('Equipos por usuario ' + username)
    }

    // DEVICE: Función que retorna N° de equipos por usuario
    const numberOfDevicesByUsernamePage = async (username) => {
        setTotalByUser(await numberOfDevicesByUsernameService(username));
        console.log('cantidad de dispositivos por nombrePage ' + totalByUser);
    }
    // DEVICE: Función para ingresar/registrar Equipo a la BD
    const deviceRegisterPage = async (device) => {
        await deviceRegisterService(device);
        deviceFindAllPage();
    }
    // DEVICE: Función para editar un equipo en la BD 
    const deviceUpdatePage = async () => {
        await deviceUpdateService();
        deviceFindAllPage();
    }
    // DEVICE: Función para Eliminar/Borrar un equipo
    const deviceDeletePage = async (id) => {
        await deviceDeleteService(id);
        deviceFindAllPage();
    }
    //----------------------------------------------------
    // Funciones para los Tickets
    //---------------------------------------------------
    // TICKET: Funcion que retorna la cantidad TICKETS "totales"
    const numberOfTicketsPage = async () => {
        setNumberTicket(await numberOfTicketsService());

        console.log('cantidad de tickets' + numberTicket);
    }
    // TICKET: Funcion que retorna la cantidad TICKETS por "status"
    const numberOfTicketByStatusPage = async () =>{
        setTotalTicketByStatus(await numberOfTicketByStatusService())
        console.log('statusPage: ' + numberTicket);

    }
    //-----------------------------
    // Funciones para las órdenes
    //-----------------------------
    // TICKET: Funcion que retorna la cantidad de Órdenes totales
    const numberOfOrdersPage = async () => {
        setNumberOrder(await numberOfOrdersService());

        console.log('cantidad de tickets' + numberTicket);
    }
    //----------------------------------------------------
    // Funciones para los Usuarios
    //---------------------------------------------------
    // USER: Funcion que retorna los usuarios segun su Role
    const UserstByRolePage = async () => {
        setUserByRole(await UserstByRoleService());
        console.log('Usuarios por rolePage: ' + userByRole);
    }
    // USER: Retorna el °N de usuarios totales
    const numberOfUsersPage = async () => {
        setNumberOfUsers(await numberOfUsersService());
        console.log('Total de usersPage: ' + numberOfUsers);

    }
    // USER: Retorna el °N de usuarios por Role
    const numberOfUserstByRolePage = async () => {
        setTotalByRole(await numberOfUserstByRoleService());
        console.log('N°RolePage: ' + totalByRole);

    }

    /* UseEffect:
     Se activa cuando se recarga la página o
     cambia el valor de alguna variable dentro de los []   
    */

    useEffect(() => {
        console.log(device);
        deviceFindAllPage();
        deviceDeletePage();
        //numberOfDevicesPage();
    }, []);

    return (

        <main>
            <section id='ladoIzquierdo'>
            </section>

            <section id='ladoDerecho'>
                <header>
                    <div className='container-buscador'>
                        <Buscador numberOfDevicesByUsernamePage={numberOfDevicesByUsernamePage} findAllDevicesByUsernamePage={findAllDevicesByUsernamePage} />
                    </div>
                </header>
                <section id='tarjetas'>
                    <Contador nom_variable={'Tickes Totales: '} numberDevice={numberTicket} />
                    <Contador nom_variable={'Ordenes Totales: '} numberDevice={numberOrder} />
                    <Contador nom_variable={'Equipos Totales: '} numberDevice={numberDevice} />
                    <Contador nom_variable={'Usuarios totales: '} numberDevice={numberOfUsers} />
                    {/* <Contador nom_variable={'Equipos por nombre: '} numberDevice={totalByUser} /> */}  {/* Se comento solo para visualizar los ticket de abajo*/}
                    <Contador nom_variable={'Ticket Cerrado: '} numberDevice={totalTicketByStatus[0]} />
                    <Contador nom_variable={'Ticket Abierto: '} numberDevice={totalTicketByStatus[1]} />
                </section>
                <section id='tablaForm'>
                    <section id='tablas'>
                        <Table device={Object.keys(deviceByUser).length === 0 ? device : deviceByUser} deviceDeletePage={deviceDeletePage} />
                    </section>
                    <section id='formularios'>
                        <Formulario deviceRegisterPage={deviceRegisterPage} />
                    </section>
                </section>
            </section>
        </main>









        // <div> 
        //     <Contador nom_variable={'Equipos Totales: '} numberDevice={numberDevice}  />
        //     <Contador nom_variable={'Tickes Totales: '} numberDevice={numberTicket}  />
        //     <Contador nom_variable={'Ordenes Totales: '} numberDevice={numberOrder}  />
        //     <Contador nom_variable={'Equipos por nombre: '} numberDevice={totalByUser}  />
        //     <Contador nom_variable={'Usuarios totales: '} numberDevice={numberOfUsers}  />


        //     <Buscador numberOfDevicesByUsernamePage = {numberOfDevicesByUsernamePage} findAllDevicesByUsernamePage = {findAllDevicesByUsernamePage} />

        //     <div>
        //         <Table device = {Object.keys(deviceByUser).length === 0 ? device : deviceByUser} deviceDeletePage={deviceDeletePage} />
        //     </div>
        //     <div>
        //         <Formulario deviceRegisterPage={deviceRegisterPage}/>
        //     </div>


        // </div>





    ) // fin de return
} // fin de const

export default TablePage;