import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Auth from "./pages/Authentication/Auth"
import Dashboard from "./pages/Dashboard/Dashboard";
import Company from "./pages/Company/Company";
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';



const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                    <Route element={<Auth />}> 
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                    <Route element={<Main />}>
                        <Route path="/home" element={<Dashboard />} />
                        <Route path="/company" element={<Company />} />
                    </Route>         
            </Routes>
            
        </BrowserRouter>
     )
}

export default AppRoutes;






{/* <div className="container">
<Sidebar />
<div className="main">
    <Header />
    {console.log("AUTH")}
    <Routes element={<ProductedRoute />}>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" />
    </Routes>
</div>
</div> */}
