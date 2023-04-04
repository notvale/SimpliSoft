import React from "react";
import "../css/table.css"

const Table = () => {

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
                    <tr>
                        <td>1</td>
                        <td>Laptop</td>
                        <td>Samsung</td>
                        <td>Sam2014</td>
                        <td>ey56fh</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Laptop</td>
                        <td>HP</td>
                        <td>Sam20178</td>
                        <td>ey56fYGh</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>


    )
}

export default Table;