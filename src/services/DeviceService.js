import axios from "axios";
const baseURL = 'http://localhost:8080';

const getAll = async () =>{

    const rest = await axios.get(baseURL+'/device/findAll');
    console.log(rest);
    return rest.data; 

}

export {getAll};