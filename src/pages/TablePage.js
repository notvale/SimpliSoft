import React from 'react';
import Table from '../components/Table';
import { useEffect, useState } from 'react';
import { getAll } from '../services/DeviceService';


const TablePage = () => {

    // Usando useState
    const [equipo, setEquipo] = useState([]);
    console.log("holDespues del useState");

     const obtenerEquipos = async () => {
        console.log("hola dentro de obtener equipos");
         setEquipo(await getAll());
     }
     console.log("holaGeneral2");

     // Usnado useEffect
     useEffect(() => {
         console.log(equipo);
         obtenerEquipos();
     },[]);



    return (
        <div>
           
            <Table equipo={equipo} />
        </div>





    ) // fin de return
} // fin de const

export default TablePage;