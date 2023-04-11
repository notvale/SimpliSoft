import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css"

const Login = () => {

    return (
        <div>
            <div class="center">
                <br />
                <h1>Login</h1>
                <form method="post" />
                <div class="txt_field">
                    <label>Usuario</label>
                    <input type="text" required placeholder="Usuario" />
                    <span></span>
                </div>

                <br />
                <div class="txt_field">
                    <label>Contraseña</label>
                    <input type="Password" required placeholder="Contraseña" />
                    <span></span>
                </div>
                <br />
                <div class="btn">
                    {/* <button type="submit">Login</button> */}
                    <Link to='/TablePage'><button class="btn" type="submit">Login</button></Link>

                </div>
                <br />
            </div>
        </div>



    )
}

export { Login };
