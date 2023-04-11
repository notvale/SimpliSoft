import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080/auth';


// 1- GET: Retorna los usuarios sugun Rol

const UserstByRoleService = async () => {
    const rest = await axios.get(baseURL + '/byRole/Cliente');
    console.log('roleService: ' + rest);
    return rest.data;
}

// 2 - GET: Retorna la cantidad de usuarios registrados en la DB
const numberOfUsersService = async () =>{
    const rest = await axios.get(baseURL + '/total' );
    //console.log('totalUsersService: ' + rest);
    return rest.data;
}

// 3- GET: Retorna N° de usuarios por role
const numberOfUserstByRoleService = async () => {
    const rest = await axios.get(baseURL + '/totalByRole/Administrador');
    console.log('N°porRoleService: ' + rest);
    return rest.data;
}

export {UserstByRoleService, numberOfUsersService, numberOfUserstByRoleService};

//TRABAJO VALE: 

// import axios from "axios"; // Se importa para poder consumir APIs
// const baseURL = 'http://localhost:8080/auth';


// // 1- GET: Retorna los usuarios sugun Rol

// const UserstByRoleService = async () => {
//     const rest = await axios.get(baseURL + '/byRole/Cliente');
//     console.log('roleService: ' + rest);
//     return rest.data;
// }

// // 2 - GET: Retorna la cantidad de usuarios registrados en la DB
// const numberOfUsersService = async () =>{
//     const rest = await axios.get(baseURL + '/total' );
//     //console.log('totalUsersService: ' + rest);
//     return rest.data;
// }

// // 3- GET: Retorna N° de usuarios por role
// const numberOfUserstByRoleService = async () => {
//     const rest = await axios.get(baseURL + '/totalByRole/Administrador');
//     console.log('N°porRoleService: ' + rest);
//     return rest.data;
// }

// export {UserstByRoleService, numberOfUsersService, numberOfUserstByRoleService};
