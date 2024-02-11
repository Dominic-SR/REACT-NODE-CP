import React,{useState,useEffect} from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from "./pages/Authentication/Auth"
import Sidebar from "./pages/Layout/Sidebar/Sidebar";
import Header from "./pages/Layout/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
const PageRoutes = () =>{

const [authentication, setAuthentication] = useState(false)
    useEffect(()=>{
        let token = localStorage.getItem('auth')
         if(token?.length > 0){
            setAuthentication(true)
         }
     },[])

    return(
        <BrowserRouter>
            {authentication ?
            <div className="container">
                <Sidebar />
                <div className="main">
                    <Header />
                    <Routes>
                    <Route path="/home" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
            : 
            <Routes>            
                <Route path="/login" element={<Auth />} />
                <Route path="/" element={<Auth />} />
            </Routes>
            }
        </BrowserRouter>
     )
}

export default PageRoutes






