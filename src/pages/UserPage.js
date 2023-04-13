import React from 'react';

import { ClientTable } from '../components/ClientTable';
// import { ClientForm } from '../components/ClientForm';
import { useEffect, useState } from "react";
import { AddUserService, AllUserService } from '../services/UserService';

const UserPage = () => {

    const [clientes, setClientes] = useState(null); //UseState

    const AllUserPage = async () => {   //fx que permite traer los datos de la api. Además, se debe agregar un fx que va a hacer funcionar a la fx creada en service. 
        setClientes(await AllUserService());
        // console.log("clientePage"+clientes); 
    }

    const AddUserPage = async (clientes) => {
        await AddUserService(clientes);
    }

    //UseEffect 

    useEffect(() => {
        AllUserPage();
        AddUserPage();
        // setClientes("nuevo cliente")
    }, [])


    return (

        <div>
            <div className='container md-4'>
                <div className='row'>
                    <div className='col-6'>
                        <ClientTable clientes={clientes} />
                        <h1>TABLA </h1>
                    </div>
                    <div className='col-6' />
                    {/* <ClientForm agregarCliente={agregarCliente} /> */}
                </div>
            </div>
        </div>

    )
}


export { UserPage }

