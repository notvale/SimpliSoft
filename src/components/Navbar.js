import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='divNavbar'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h3>SimpliSoft</h3></a>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to ='/RegistroPage'><button class="btn btn-primary" type="button">Registro</button></Link>
     
          </div>

      
    </div>
       
      </nav >
    </div >
  )
}

export {Navbar};
