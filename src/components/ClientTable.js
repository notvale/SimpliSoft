import React from 'react';
import "../css/clientTable.css"

const ClientTable = ({ clientes }) => {
    return (
        <div>
            <h3>Clientes</h3>
            <table class="tclientes">
                /* <thead>
    <tr>
        <th scope="col">Id User</th>
        <th scope="col">RUT</th>
        <th scope="col">Nombre</th>
        <th scope="col">Contraseña</th>
        <th scope="col">Email</th>
        <th scope="col">Dirección</th>
        <th scope="col">User Status</th>
        <th scope="col">Teléfono</th>
        <th scope="col">Rol</th>
        <th scope="col">Cuenta bloqueada</th>
        <th scope="col">Acción</th>
    </tr>
</thead>
<tbody>

    {/* {clientes.map(c => (
        <tr>
             <td>{c.idUser}</td>
            <td>{c.rut}</td>
            <td>{c.username}</td>
            <td>{c.userPassword}</td>
            <td>{c.email}</td>
            <td>{c.address}</td>
            <td>{c.userStatus}</td>
            <td>{c.phone}</td>
            <td>{c.fkIdRole}</td>
            <td>{c.accountNonLocked}</td>
            <td><button type="button" class="btn btn-outline-info" >Editar</button>
            <button type="button" class="btn btn-outline-info" >Eliminar</button></td>
        </tr>

    ))} */}

</tbody>
</table>
</div>

    )}


export {ClientTable}
