import React from "react";
import "../css/table.css"

const TableUser = ({ user, deleteUserPage }) => { //usamos el mismo promp que es TablePage 

    return (
        <div id="main-container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>RUT</th>
                        <th>Nombre</th>
                        {/* <th>Contraseña</th> */}
                        <th>Email</th>
                        <th>Dirección</th>
                        {/* <th>Estatus</th> */}
                        <th>Teléfono</th>
                        <th>Role</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(e => (
                        <tr>
                            <td>{e.idUser}</td>
                            <td>{e.rut}</td>
                            <td>{e.username}</td>
                            {/* <td>{e.userPassword}</td> */}
                            <td>{e.email}</td>
                            <td>{e.address}</td>
                            {/* <td>{e.userStatus}</td> */}
                            <td>{e.phone}</td>
                            <td>{e.fkIdRole}</td>

                            <td>
                                <button type="button" class="btn btn-warning">Editar</button>
                                <button type="button" class="btn btn-danger" onClick={() =>deleteUserPage(e.idUser)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )
}

export default TableUser;