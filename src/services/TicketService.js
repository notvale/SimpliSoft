import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080';


// 5- GET: Retorna cantidad de tickets totales
const numberOfTicketsService = async () => {
    const rest = await axios.get(baseURL + '/ticket/total');
    console.log("cantidad de Tickets");
    console.log(rest);
    return rest.data
}


export {numberOfTicketsService};