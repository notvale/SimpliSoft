import React from 'react';
import { useEffect, useState } from 'react';
import Table from '../components/Table';
import Contador from '../components/Contador';
import Formulario from '../components/Formulario';
import Buscador from '../components/Buscador';
import {
    deviceFindAllService, deviceRegisterService, deviceUpdateService, deviceDeleteService, findAllDevicesByUsernameService,
    numberOfDevicesService, numberOfDevicesByUsernameService } from '../services/DeviceService';
import { numberOfTicketsService } from '../services/TicketService';
import {numberOfOrdersService} from '../services/OrderService';
const TablePage = () => {
    /*
        Declaración de useState
    */
    // DEVICE: useState para DEVICE
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
    // ORDER: 
    const [numberOrder,setNumberOrder] = useState(0);
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
    }

    // DEVICE: Función retorna "CANTIDAD" de equipos totales
    const numberOfDevicesPage = async () => {
        setNumberDevice(await numberOfDevicesService());
    }
    // DEVICE: Retorna todos los equipos asociados a un username
    const findAllDevicesByUsernamePage = async (username) =>{
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
    // TICKET: Funcion que retorna la cantidad TICKETS totales
    const numberOfTicketsPage = async () => {
        setNumberTicket(await numberOfTicketsService());

        console.log('cantidad de tickets' + numberTicket);
    }
    //-----------------------------
    // Funciones para las órdenes
    //-----------------------------
    // TICKET: Funcion que retorna la cantidad de Órdenes totales
    const numberOfOrdersPage = async () => {
        setNumberOrder(await numberOfOrdersService());

        console.log('cantidad de tickets' + numberTicket);
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
            <Contador numberDevice={numberDevice} nom_variable={'Equipos Totales:'} />
            <Contador numberDevice={numberTicket} nom_variable={'Tickes Totales:'} />
            <Contador numberDevice={numberOrder} nom_variable={'Ordenes Totales:'} />
            <Contador numberDevice={totalByUser} nom_variable={'Equipos por nombre'} />


            <Buscador numberOfDevicesByUsernamePage = {numberOfDevicesByUsernamePage} findAllDevicesByUsernamePage = {findAllDevicesByUsernamePage} />
            
            <div>
                <Table device = {Object.keys(deviceByUser).length === 0 ? device : deviceByUser} deviceDeletePage={deviceDeletePage} />
            </div>
            <div>
                <Formulario deviceRegisterPage={deviceRegisterPage} />
            </div>


        </div>





    ) // fin de return
} // fin de const

export default TablePage;