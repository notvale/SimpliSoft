import React from 'react';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Main from '../components/Main';

import {
    deviceFindAllService, deviceRegisterService, deviceUpdateService, deviceDeleteService, findAllDevicesByUsernameService,
    numberOfDevicesService, numberOfDevicesByUsernameService
} from '../services/DeviceService';
import { numberOfTicketsService, numberOfTicketByStatusService,getTicketService } from '../services/TicketService';
import { numberOfOrdersService,getOrderService, registerOrderService, numberOfOrdersByStatusService } from '../services/OrderService';
import { UserstByRoleService, numberOfUsersService, numberOfUserstByRoleService,findAllUsersService, registerUsersService, deleteUserService } from '../services/UserService';
import "../css/PageTable.css"

const TablePage = () => {
    /*
        Declaración de useState
    */
    // useState para hacer el cambio de vista segun Menú Lateral
    const [view, setView] = useState('General');
    // DEVICE: useState para registrar DEVICE
    const [device, setDevice] = useState([]);
    // DEVICE: useState que toma el nombre del buscador
    const [username, setUsername] = useState('');
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
    const [totalTicketByStatus, setTotalTicketByStatus] = useState([]);
    //TICKET: useState que almacena todos Tickets
    const [tickets, setTickets] = useState({});
    // ORDER: useState para N° de Ordenes por status
    const [numberStatusOrder, setNumberStatusOrder] = useState([]);
    // ORDER: useState para N° de Ordenes
    const [numberOrder, setNumberOrder] = useState(0);
    // ORDER: useState que guarda las Ordenes registradas
    const [order, setOrder] = useState({});
    // USER: useState para mostrar a los usuarios segun su role
    const [userByRole, setUserByRole] = useState({});
    // USER: useState para N° de usuarios por Role
    const [totalByRole, setTotalByRole] = useState([]);
    // USER: useState para N° de usuarios totales
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    // USER: useState usado para mostrar los Usuarios registrados
    const [user, setUser] = useState({});
    // USER: useState usado para registrar usuarios
    const [userRegister, setUserRegister] = useState({});
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
        numberOfUsersPage();
        numberOfUserstByRolePage();
        numberOfTicketByStatusPage();
        numberOfOrdersByStatusPage();
        getTicketPage();
        getOrderPage();
        findAllUsersPage();
        registerUsersPage();
        deleteUserPage();
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
    // DEVICE: Función para Registrar Equipo a la BD
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
    const numberOfTicketByStatusPage = async () => {
        setTotalTicketByStatus(await numberOfTicketByStatusService())
        console.log('statusPage: ' + numberTicket);

    }
    // TICKET: Función que retorna todos los tickets
    const getTicketPage = async () => {
        setTickets(await getTicketService());
        console.log("ticketsPage:" + tickets);
    }
    //-----------------------------
    // Funciones para las órdenes
    //-----------------------------
    // ORDER: Funcion que retorna la cantidad de Órdenes totales
    const numberOfOrdersPage = async () => {
        setNumberOrder(await numberOfOrdersService());

        console.log('Total de ordenes: ' + numberOrder);
    }
    // ORDER: Función que retorna la cantidad de ordenes por status
    const numberOfOrdersByStatusPage = async () => {
        setNumberStatusOrder(await numberOfOrdersByStatusService());

        console.log('OrderPage por status: ' + numberStatusOrder);
    }
    // ORDER: Función que retorna las Ordenes registradas
    const getOrderPage = async () => {
        setOrder(await getOrderService());
        console.log("Ordenes : " + order);
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
    // USER: Funcion que retorna a los usuarios registrados
    const findAllUsersPage = async () => {
        setUser(await findAllUsersService());
        console.log('UsuariosRegistradosPage: ' + user);
    }
    //USER de prueba
    // const userPrueba = {
    //     "rut": "88888888-2",
    //     "username": "888",
    //     "userPassword": "888",
    //     "email": "888@gmail.cl",
    //     "address": "Santiago - Centro",
    //     "userStatus": true,
    //     "phone": "+56949852412",
    //     "fkIdRole": 1
    // }
    // USER: Función usada para registrar usuarios
    const registerUsersPage = async (userRegister) => {
        await registerUsersService(userRegister);
        findAllUsersPage();
        console.log('userRegister: ' + userRegister);
    }
    // USER: Función que se usa para eliminar usuarios
    const deleteUserPage = async (id) => {
        await deleteUserService(id);
        findAllUsersPage();
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

        <div>
            {/* Sidebar: Aquí se encuentra el menu lateral */}
            <Sidebar view = {view} setView = {setView} /> 
            {/* MainContent: Aquí se encuentra la Bienvenida y/o cabecera */}
            <MainContent />
            {/* Main: Aquí se encuentran las tarjetas, cuadro de ingresos, gráficos y tablas */}
            <Main 
                view = {view} 
                totalTicketByStatus = {totalTicketByStatus} numberTicket = {numberTicket} tickets= {tickets} 
                numberOrder= {numberOrder} numberStatusOrder = {numberStatusOrder} order = {order}
                numberDevice ={numberDevice} deviceDeletePage={deviceDeletePage} deviceByUser = {deviceByUser} 
                device = {device} username={username} setUsername={setUsername}  
                numberOfUsers = {numberOfUsers} numberOfDevicesByUsernamePage={numberOfDevicesByUsernamePage} 
                findAllDevicesByUsernamePage={findAllDevicesByUsernamePage} user={user} totalByRole = {totalByRole}
                registerUsersPage = {registerUsersPage} deleteUserPage = {deleteUserPage}

            />
        </div>

        //     <div>
        //         <Formulario deviceRegisterPage={deviceRegisterPage}/>
        //     </div>



    ) // fin de return
} // fin de const

export default TablePage;