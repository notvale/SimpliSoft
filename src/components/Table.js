import React from "react";
import "../css/table.css"

const Table = ({ device, deviceDeletePage }) => { //usamos el mismo promp que es TablePage 

    return (
        <div id="main-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo de Equipo</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>N° de Serie</th>
                        <th>ID Usuario</th>
                        <th> Acciones </th>

                    </tr>
                </thead>
                <tbody>
                    {device.map(e => (
                        <tr>
                            <td>{e.idDevice}</td>
                            <td>{e.deviceType}</td>
                            <td>{e.deviceBrand}</td>
                            <td>{e.deviceModel}</td>
                            <td>{e.serialNumber}</td>
                            <td>{e.fkIdUser}</td>
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

export default Table;