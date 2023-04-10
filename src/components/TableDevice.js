import React from "react";
import "../css/tableDevice.css"

const TableDevice = ({ equipo }) => { //usamos el mismo promp que es TablePage 

    return (
<div>
<table>
<thead>
    <tr>
        <th>ID</th>
        <th>N° de ticket</th>
        <th>Cliente</th>
        <th>Estado</th>
        <th>Cantidad de órdenes</th>
        </tr>
</thead>
</table>
</div> 
) 
}

export {TableDevice};
