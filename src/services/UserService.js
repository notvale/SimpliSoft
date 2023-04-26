import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080/auth';

// Array que contiene todos los Roles de los usuarios
const roleOfUsers = ['Administrador', 'Tecnico', 'Cliente'];

// 1- GET: Retorna los usuarios segun Rol
const UserstByRoleService = async () => {
    const rest = await axios.get(baseURL + '/byRole/Cliente');
    console.log('roleService: ' + rest);
    return rest.data;
}

// 2 - GET: Retorna la cantidad de usuarios registrados en la DB --> (OK)
const numberOfUsersService = async () =>{
    const rest = await axios.get(baseURL + '/total' );
    //console.log('totalUsersService: ' + rest);
    return rest.data;
}

// 3- GET: Retorna N° de usuarios por role --> (OK)
const numberOfUserstByRoleService = async () => {

    const roleOfUsersArray = []; // Array para almacenar los datos del rest.data
    
    for (let i = 0; i < roleOfUsers.length; i++) {
        const rest = await axios.get(baseURL + '/totalByRole/'  + roleOfUsers[i]);
        roleOfUsersArray.push(rest.data);
        console.log("statusArrayOrder: " + roleOfUsersArray);
    }
    return roleOfUsersArray;
}

// 4- GET: Para obtener Usuarios registrados en la BD --> (OK)
const findAllUsersService = async () => {
    const rest = await axios.get(baseURL + '/findAll');
    console.log('UsuariosRegistrados: ' + rest);
    return rest.data;   
} 

// 5- POST: Registrar usuarios
const registerUsersService = async (user) =>{
    const rest = await axios.post(baseURL + '/register', user);
    console.log('registroUser: '+ rest);
    return rest.data;
} 

// 6- DELETE: Borrar usuarios
const deleteUserService = async (id) =>{
    const rest = await axios.delete(baseURL + '/delete/'+ id);
    return rest.data;   
}
export {UserstByRoleService, numberOfUsersService, numberOfUserstByRoleService, findAllUsersService, registerUsersService, deleteUserService};