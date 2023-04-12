import React from "react";
import "../css/table.css"

const TableTicket = ({ tickets, deviceDeletePage }) => { //usamos el mismo promp que es TablePage 

    return (
        <div id="main-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha de Creación</th>
                        <th>última modificación</th>
                        <th>Estado</th>
                        <th>ID Usuario</th>
                        <th> Acciones </th>

                    </tr>
                </thead>
                <tbody>
                    {tickets.map(e => (
                        <tr>
                            <td>{e.idTicket}</td>
                            <td>{e.ticketCreationDate}</td>
                            <td>{e.ticketCloseDate}</td>
                            <td>{e.ticketStatus}</td>
                            <td>{e.fkIdTicketuser}</td>
                            <td>
                                <button type="button" class="btn btn-warning">Editar</button>
                                <button type="button" class="btn btn-danger" onClick={() =>deviceDeletePage(e.idDevice)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )
}

export default TableTicket;