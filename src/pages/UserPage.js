import React from 'react';

import { ClientTable } from '../components/ClientTable';
import { ClientForm } from '../components/ClientForm';
import { useEffect, useState } from "react";
import { getAllClient } from "../services/UserPageClientService"; //revisar si es get all  o no = 
import { addClient } from '../services/UserPageClientService';

// const UserPage = () => {

// // const clientes =[{
// //     id_user:'1',
// //     rut:12456789-5,
// //     username:'vale',
// //     email:'v@gmail.com',
// //     phone:'456789954',
// //     addres:'ladlña'
// // }]

//     const [clientes, setClientes] = useState({});

//     //esta fx permite traer todos los datos de la api para que la agreguemos a la tabla,
//     //y se debe agregar un fx qu eva  aahacer funcionar a la fx creada en service.
//     const obtenerCliente = async () => {
//         setClientes(await getAllClient());
//         console.log("clientePage"+clientes); 
//     }

//     // const agregarCliente = async (cliente) => {
//     //     await addClient(cliente);
//     //     //llamando a la fx obtener cliente, hago que cada vez que se recargue la página, se va a obtener los clientes
//     //     obtenerCliente();
//     // }

//     // const editarCliente = async()=>{
//     //     await editClient();
//     // }

//     useEffect(() => {
//         console.log("cliente")
//         //setCliente("Nuevo Cliente");
//         obtenerCliente()
//     }, [])


//     return (

//         <div>
//             <div className='container md-4'>
//                 <div className='row'>
//                     <div className='col-6'>
//                         <ClientTable clientes={clientes} />
//                     </div>
//                     <div className='col-6' />
//                     {/* <ClientForm agregarCliente={agregarCliente} /> */}
//                 </div>
//             </div>
//         </div>

//     )
// }


// export { UserPage }

const UserPage = ()=> {
    return(
        <ClientTable></ClientTable>
    )

}
export {UserPage}