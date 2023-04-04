import React from "react";
import "../css/table.css"

const Table = ({ equipo }) => { //usamos el mismo promp que es TablePage 

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
                    </tr>
                </thead>
                <tbody>
                    {equipo.map(e => (
                        <tr>
                            <td>{e.idDevice}</td>
                            <td>{e.deviceType}</td>
                            <td>{e.deviceBrand}</td>
                            <td>{e.deviceModel}</td>
                            <td>{e.serialNumber}</td>
                            <td>{e.fkIdUser}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )
}

export default Table;