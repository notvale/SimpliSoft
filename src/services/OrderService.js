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
// const statusOrders = {
//     1: 'Sin Revisar',
//     2: 'Diagnosticado',
//     3: 'Reparado'
// }
// Otra forma de resolver y manejar lo status
const statusOrders = ['Sin Revisar', 'Diagnosticado', 'Reparado'];

// 3- GET: que retorna la cantidad de ordenes por status
const numberOfOrdersByStatusService = async () => {
    const statusArrayOrder = []; // Array para almacenar los datos del rest.data
    
    for (let i = 0; i < statusOrders.length; i++) {
        const rest = await axios.get(baseURL + '/order/totalByStatus/' + statusOrders[i]);

        statusArrayOrder.push(rest.data);
         
        console.log("statusArrayOrder: " + statusArrayOrder);
    }
    return statusArrayOrder;
}



export { numberOfOrdersService, registerOrderService, numberOfOrdersByStatusService };