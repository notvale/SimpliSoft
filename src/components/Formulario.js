import React from "react";
import "../css/formulario.css"
import { useEffect, useState } from 'react';

const deviceInit = {

    "idDevice": 0,
    "deviceType": "",
    "deviceBrand": "",
    "deviceModel": "",
    "serialNumber": "",
    "fkIdUser": 0
}

const Formulario = ({ deviceRegisterPage }) => { //usamos el mismo promp que es TablePage 

    const [device, setDevice] = useState(deviceInit);
    const { idDevice, deviceType, deviceBrand, deviceModel, serialNumber, fkIdUser } = device;

    // Esta funcion permite guardar tods lo datos un formulario y activar el useState una sola vez.
    const handleInputChange = (e) => {
        console.log(e);
        const handleFormValue = {
            ...device,
            [e.target.name]: e.target.value,
        }

        setDevice(handleFormValue);
        console.log(device);

    }
    return (
        <div id="container">
            <form>
                <div className="form-header">
                    <h1 className="form-title"> Registro</h1>
                </div>
                <label for="N° de serie" className="form-label">N° de serie</label>
                <input
                    type="text"
                    placeholder="N° de serie"
                    className="form-input"
                    id="serialNumber"
                    name="serialNumber"
                    value={serialNumber}
                    onChange={handleInputChange} />

                <label className="form-label" for="Tipo de equipo" >Tipo de equipo</label>
                <input
                    type="text"
                    placeholder="Tipo de equipo"
                    className="form-input"
                    id="deviceType"
                    name="deviceType"
                    value={deviceType}
                    onChange={handleInputChange} />

                <label for="Marca" className="form-label">Marca</label>
                <input
                    type="text"
                    placeholder="Marca"
                    className="form-input"
                    id="deviceBrand"
                    name="deviceBrand"
                    value={deviceBrand}
                    onChange={handleInputChange} />

                <label for="Modelo" className="form-label">Modelo</label>
                <input
                    type="text"
                    placeholder="Modelo"
                    className="form-input"
                    id="deviceModel"
                    name="deviceModel"
                    value={deviceModel}
                    onChange={handleInputChange} />


                <label for="Id Cliente" className="form-label">Id Cliente</label>
                <input
                    type="text"
                    placeholder="Id Cliente"
                    className="form-input"
                    id="fkIdUser"       //nombre que aparece en el json postman
                    name="fkIdUser"     //nombre que aparece en el json postman
                    value={fkIdUser}    //nombre que aparece en el json postman
                    onChange={handleInputChange} />

                <div id='button'>
                    <button class="btn btn-primary" type="button" onClick={() => deviceRegisterPage(device)} >Registrar</button>
                </div>
            </form>
        </div>


    )
}

export default Formulario;