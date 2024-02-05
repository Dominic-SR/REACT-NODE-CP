import axios from 'axios'
import { ApiServices } from "../../config/Services/Services"

export const AxiosInstance = () =>{

    const Axios =  axios.create({
        baseURL : `${ApiServices.BaseURL}`
    })
    Axios.defaults.headers.common['Content-Type'] = "application/json";

    return Axios;
}