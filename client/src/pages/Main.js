import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Layout/Sidebar/Sidebar";
import "./Main.css";
const Main = () =>{
const navigate = useNavigate();
useEffect(()=>{
   let token = localStorage.getItem('auth')
    if(token?.length == 0){
        navigate('/login')
    }
},[])

return(
    <div className="container">
        <Sidebar />
    </div>
)
}

export default Main;