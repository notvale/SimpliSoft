import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080';


// 5- GET: Retorna cantidad de tickets totales
const numberOfOrdersService = async () => {
    const rest = await axios.get(baseURL + '/order/total');
    console.log("cantidad de Ordenes");
    console.log(rest);
    return rest.data
}


export {numberOfOrdersService};