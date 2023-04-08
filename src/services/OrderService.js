import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080';


// 1- GET: Retorna cantidad de Ordenes totales
const numberOfOrdersService = async () => {
    const rest = await axios.get(baseURL + '/order/total');
    console.log("cantidad de Ordenes");
    console.log(rest);
    return rest.data
}

// 2- POST: Para ingresar/registrar ordenes a la BD
const registerOrderService = async (order) => {
    const rest = await axios.post(baseURL + '/order/register', order);
    console.log(rest);
    return rest.data;
}

export {numberOfOrdersService, registerOrderService};