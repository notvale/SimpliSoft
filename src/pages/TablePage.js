import React from 'react';
import Table from '../components/Table';
import { useEffect, useState } from 'react';
import { deviceFindAllService, deviceRegisterService, deviceUpdateService, deviceDeleteService } from '../services/DeviceService';
import Formulario from '../components/Formulario';


const TablePage = () => {

    // Usando useState
    const [device, setDevice] = useState([]);

    // Función retorna todos los equipos
    const deviceFindAllPage = async () => {
        setDevice(await deviceFindAllService());
    }
    // Función ingresar/registrar datos a la BD
    const deviceRegisterPage = async (device) => {
        await deviceRegisterService(device);
        deviceFindAllPage();
    }
    // Función para editar un equipo en la BD 
    const deviceUpdatePage = async () => {
        await deviceUpdateService();
        deviceFindAllPage();
    }
    //Función para Eliminar/Borrar un equipo
    const deviceDeletePage = async (id) => {
        await deviceDeleteService(id);
        deviceFindAllPage();
    }

    // Usando useEffect
    useEffect(() => {
        console.log(device);
        deviceFindAllPage();
        // deviceRegisterPage();
        // deviceUpdatePage();
        deviceDeletePage();
    }, []);

    return (
        <div>
            <div>
                <Table device={device} deviceDeletePage={deviceDeletePage}/>
            </div>
            <div>
            <Formulario deviceRegisterPage = {deviceRegisterPage}/>
            </div>
            {/* <tr>
                <td>
                    <Table device={device} />
                </td>
                <td>
                    <Formulario deviceRegisterPage = {deviceRegisterPage}/>
                </td>
            </tr> */}

        </div>





    ) // fin de return
} // fin de const

export default TablePage;