import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080';

// //Objeto para probar apis
// const prueba = {

//     "idDevice": 14,
//     "deviceType": "televisor",
//     "deviceBrand": "Iphone",
//     "deviceModel": "Iphone",
//     "serialNumber": "22222",
//     "fkIdUser": 1
// }

// 1- GET: Método que retorna todos los equipos
const deviceFindAllService = async () => {
    const rest = await axios.get(baseURL + '/device/findAll');
    console.log(rest);
    return rest.data;
}

// 2- POST: Método para ingresar/registrar datos a la BD
const deviceRegisterService = async (device) => {
    const rest = await axios.post(baseURL + '/device/register', device);
    console.log(rest);
    return rest.data;
}

// 3- PUT: Método para editar un equipo en la BD
const deviceUpdateService = async (device) => {
    const rest = await axios.put(baseURL + '/device/update', device);
    console.log(rest);
    return rest.data;
}

// 4- DELETE: Método para Eliminar/Borrar un equipo 
const deviceDeleteService = async (id) => {
    const rest = await axios.delete(baseURL + '/device/delete/' + id);
    console.log(rest);
    return rest.data;
}

// 5- GET: Retorna cantidad de equipos totales
const numberOfDevicesService = async () => {
    const rest = await axios.get(baseURL + '/device/total');
    console.log("cantidad de equipos");
    console.log(rest);
    return rest.data
}

// 6- GET: Retorna cantidad de equipos por Usuario
const numberOfDevicesByUsernameService = async (username) => {
    
    const rest = await axios.get(baseURL + '/device/totalByUser/' + username);
    console.log(rest);
    return rest.data
}

// 7- GET: Métod que retorna todos los equipos asociados a un username
const findAllDevicesByUsernameService = async (username) => {
    const rest = await axios.get(baseURL + '/device/' + username);
    console.log(rest);
    return rest.data
}

export {
    deviceFindAllService, deviceRegisterService, deviceUpdateService, deviceDeleteService, findAllDevicesByUsernameService,
    numberOfDevicesService, numberOfDevicesByUsernameService, 
};