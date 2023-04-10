import React from 'react';
import { Link } from 'react-router-dom';


const RegistroPage = () => {
    return (
        
            <div>
                <h1>hola acá tiene que estar el registro</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <Link to ='/Dashboard'><button class="btn btn-primary" type="button">Acceder como usuario</button></Link>
                </div>

            </div >


  )
}

export default RegistroPage; 