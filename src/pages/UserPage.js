import React from 'react';

import { ClientTable } from '../components/ClientTable';
// import { ClientForm } from '../components/ClientForm';
import { useEffect, useState } from "react";
import { AllUserService } from '../services/UserService';

const UserPage = () => {

//UseState
    const [clientes, setClientes] = useState({});

    //esta fx permite traer todos los datos de la api para que la agreguemos a la tabla,
    //y se debe agregar un fx qu eva  aahacer funcionar a la fx creada en service.
    const AllUserPage = async () => {
        setClientes(await AllUserService());
        console.log("clientePage"+clientes); 
    }

    // const agregarCliente = async (cliente) => {
    //     await addClient(cliente);
    //     //llamando a la fx obtener cliente, hago que cada vez que se recargue la página, se va a obtener los clientes
    //     obtenerCliente();
    // }

    // const editarCliente = async()=>{
    //     await editClient();
    // }

//UseEffect 

    useEffect(() => {
        console.log(clientes)
        //setCliente("Nuevo Cliente");
        setClientes("nuevo cliente")
    }, [])


    return (

        <div>
            <div className='container md-4'>
                <div className='row'>
                    <div className='col-6'>
                        <ClientTable clientes={clientes} />
                    </div>
                    <div className='col-6' />
                    {/* <ClientForm agregarCliente={agregarCliente} /> */}
                </div>
            </div>
        </div>

    )
}


export { UserPage}

