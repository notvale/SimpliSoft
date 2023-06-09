import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080';


// 1- GET: Retorna cantidad de tickets totales --> (OK)
const numberOfTicketsService = async () => {
    const rest = await axios.get(baseURL + '/ticket/total');
    console.log("cantidad de Tickets");
    console.log(rest);
    return rest.data
}

const statusTickets = {
    1: 'Cerrado',
    2: 'Abierto',
    3: 'Pausado'
}
// 2- GET: Retorna cantidad de tickets por status --> (OK)
const numberOfTicketByStatusService = async (status) => {
    const statusArray = [];

    for (let i = 1; i <= Object.keys(statusTickets).length; i++) {
        const rest = await axios.get(baseURL + '/ticket/totalByStatus/' + statusTickets[i]);
        console.log("statusService: " + rest);

         statusArray.push(rest.data);
         
         console.log("statusArray: " + statusArray);
    }
    return statusArray;
}
// 3- GET: Retorna los Tickets registrados --> (OK)
const  getTicketService = async () => {
    const rest = await axios.get(baseURL + '/ticket/findAll');
    console.log("Tickets: " + rest);
    return rest.data
}   




export { numberOfTicketsService, numberOfTicketByStatusService, getTicketService };