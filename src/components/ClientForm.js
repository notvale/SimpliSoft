import React from "react";
// import "../css/clientForm.css"
import { useEffect, useState } from "react";

const clientInit={
  "idUser":0,
  "rut":"", 
  "username":"",
  "userPassword":"",
  "email":"",
  "address":"",
  "userStatus":"",
  "phone":0,
  "fkIdRole":0,
  "accountNonLocked":"",

}

const ClientForm =()=>{

  const [clientes, setClientes] = useState(clientInit);
  const {rut, ussername, email, phone, address, } = clientes; //FALTA AGREGAR 

  const handleInputChange = (c) =>{
    console.log(c);
    const handleFormValue={
     ...cliente,
    [c.target.ussername]: c.target.value,  
    }
   
  setCliente(handleFormValue);
  console.log(cliente);
 }
    return(
<div>
<form>

  <fieldset disabled>
    <legend>Registro cliente</legend>

     <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Rut</label>
      <input 
      type="text" 
      id="disabledTextInput" 
      class="form-control" 
      placeholder="XXXXXXXX-X "
      name="rut"
      value={rut}
      onChange={handleInputChange}/>
    </div>


    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Nombre </label>
      <input 
      type="text" 
      id="disabledTextInput" 
      class="form-control" 
      placeholder="Nombre y apellido "
      name="ussername" // cuál es la diferencia entre en name y value?
      value={ussername}
      onChange={handleInputChange}/>
    </div>

        <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Email</label>
      <input 
      type="text" 
      id="disabledTextInput" 
      class="form-control" 
      placeholder="email@email.com"
      name="email" 
      value={email}
      onChange={handleInputChange}/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Teléfono</label>
      <input 
      type="text" 
      id="disabledTextInput" 
      class="form-control" 
      placeholder="+569-XXXXXXXX"
      name="phone" 
      value={phone}
      onChange={handleInputChange}/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Dirección</label>
      <input 
      type="text" 
      id="disabledTextInput" 
      class="form-control" 
      placeholder="calle, comuna, dirección"
      name="address" 
      value={address}
      onChange={handleInputChange}/>
    </div>


    <button type="submit" class="btn btn-outline-info" onClick={()=>agregarCliente(cliente)}>Confirmar información</button>
    <button type="submit" class="btn btn-outline-info">Editar información</button>
  </fieldset>
</form>
</div>

    )
}

export { ClientForm };
