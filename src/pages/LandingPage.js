import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
<h1>hola esta es la landing</h1>
<Link to ='/LoginPage'><button class="btn btn-primary" type="button">Login</button></Link>

        </div>
    )
}

export default LandingPage; 