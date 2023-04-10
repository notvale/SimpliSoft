import axios from "axios";
const baseURL ="http://localhost:8080/auth";

//get para obtener Usuarios registrados en la BD

 const getAllClient =async ()=> 
 {
    const rest= await axios.get(baseURL+'/findAll') 
     console.log(rest);
    return rest.data;
 }

//Hay muchos métodos get con los cuales tengo duda porqe usan pathvariable.

 //post: agregar cliente, registro desde la página a la bd.
 const addClient = async (cliente) =>{
   const rest = await axios.post(baseURL+"/register",cliente);
   console.log(rest);
   return rest.data; 
 }

const editClient = async(cliente)=>{
   const rest = await axios.put(baseURL+"/update", cliente);
   console.log(rest);
   return rest.data; 
}

const deleteClient= async (id)=>{
   const rest = await axios.detele(baseURL+"/delete/"+id);
   console.log(rest);
   return rest.data; 
}

export {getAllClient, addClient, editClient, deleteClient}



