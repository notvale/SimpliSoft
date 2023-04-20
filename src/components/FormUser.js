import React from "react";
import "../css/formulario.css"
import { useEffect, useState } from 'react';

const userInit = {

    "idUser": 0,
    "rut": "",
    "username": "",
    "userPassword": "",
    "email": "",
    "address": "",
    "userStatus": "",
    "phone": "",
    "fkIdRole": 0
}

const FormUser = ({ registerUsersPage }) => { //usamos el mismo promp que es TablePage 

    const [userForm, setuserForm] = useState(userInit);
    const { idUser, rut, username, userPassword, email, address, userStatus, phone, fkIdRole } = userForm;

    // Esta funcion permite guardar tods lo datos un formulario y activar el useState una sola vez.
    const handleInputChange = (e) => {
        console.log(e);
        const handleFormValue = {
            ...userForm,
            [e.target.name]: e.target.value,
        }

        setuserForm(handleFormValue);
        console.log(userForm);
    }
    return (
        <div id="container">
            <form>
                <div className="form-header">
                    <h1 className="form-title"> Registro de Usuario</h1>
                </div>
                {/* Cuandro para ingresar el RUT */}
                <label for="N° de Rut" className="form-label">N° de Rut</label>
                <input
                    type="text"
                    placeholder="N° de Rut"
                    className="form-input"
                    id="rut"
                    name="rut"
                    value={rut}
                    onChange={handleInputChange} />
                {/* Cuandro para ingresar el nombre completo */}
                <label className="form-label" for="username" >Nombre Completo</label>
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="form-input"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleInputChange} />
                {/* Cuadro para ingresar la contraseña */}
                <label for="userPassword" className="form-label">Contraseña</label>
                <input
                    type="text"
                    placeholder="Contraseña"
                    className="form-input"
                    id="userPassword"
                    name="userPassword"
                    value={userPassword}
                    onChange={handleInputChange} />
                {/* Cuadro para ingresar el email */}
                <label for="email" className="form-label">email</label>
                <input
                    type="email"
                    placeholder="email"
                    className="form-input"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
                {/* Cuadro para ingresar la dirección */}
                <label for="address" className="form-label">Dirección</label>
                <input
                    type="text"
                    placeholder="address"
                    className="form-input"
                    id="address"       //nombre que aparece en el json postman
                    name="address"     //nombre que aparece en el json postman
                    value={address}    //nombre que aparece en el json postman
                    onChange={handleInputChange} />
                {/* Cuadro para ingresar el estado de la cuenta */}
                {/* <label for="userStatus" className="form-label">Estado de la Cuenta</label>
                <input
                    type="text"
                    placeholder="Estado de la Cuenta"
                    className="form-input"
                    id="userStatus"       //nombre que aparece en el json postman
                    name="userStatus"     //nombre que aparece en el json postman
                    value={userStatus}    //nombre que aparece en el json postman
                    onChange={handleInputChange} /> */}
                 {/* Cuadro para ingresar el telefono */}
                 <label for="address" className="form-label">Teléfono</label>
                <input
                    type="text"
                    placeholder="Teléfono"
                    className="form-input"
                    id="phone"       //nombre que aparece en el json postman
                    name="phone"     //nombre que aparece en el json postman
                    value={phone}    //nombre que aparece en el json postman
                    onChange={handleInputChange} />               
                {/* Cuadro para ingresar el role */}
                <label for="fkIdRole" className="form-label">Rol</label>
                <input
                    type="number"
                    placeholder="Rol"
                    className="form-input"
                    id="fkIdRole"       //nombre que aparece en el json postman
                    name="fkIdRole"     //nombre que aparece en el json postman
                    value={fkIdRole}    //nombre que aparece en el json postman
                    onChange={handleInputChange} />




                <div id='button'>
                    <button class="btn btn-primary" type="button" onClick={() => registerUsersPage(userForm)} >Registrar</button>
                </div>
            </form>
        </div>

    )
}

export default FormUser;