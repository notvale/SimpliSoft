import React from "react";
import "../css/table.css"

const TableOrder = ({ order, deviceDeletePage }) => { //usamos el mismo promp que es TablePage 

    return (
        <div id="main-container">
            <table>
                <thead>
                    <tr>
                        <th>Informe Cliente</th>
                        <th>Informe Inicial</th>
                        <th>Informe Técnico</th>
                        <th>Adjuntar</th>
                        <th>ID Equipo</th>
                        <th>ID Ticket </th>
                        <th>ID Orden </th>
                        <th>Última Actualización </th>
                        <th>Fecha de Creación </th>
                        <th>Estado </th>
                        <th>Acciones </th>




                    </tr>
                </thead>
                <tbody>
                    {order.map(e => (
                        <tr>
                            <td>{e.commentClient}</td>
                            <td>{e.commentInitial}</td>
                            <td>{e.commentTechnical}</td>
                            <td>{e.files}</td>
                            <td>{e.fkIdDevice}</td>
                            <td>{e.fkIdTicket}</td>
                            <td>{e.idOrderService}</td>
                            <td>{e.orderCloseDate}</td>
                            <td>{e.orderCreationDate}</td>
                            <td>{e.statusOrder}</td>

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

export default TableOrder;