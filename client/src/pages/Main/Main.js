import {useEffect} from "react"
import { useNavigate,Outlet} from "react-router-dom";
import Sidebar from "../../pages/Layout/Sidebar/Sidebar";
import Header from "../../pages/Layout/Header/Header";
const ProductedRoute = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        let token = localStorage.getItem('auth')
        if(token?.length === 0 || token === undefined || token === null){
            navigate("/login");
        }
    },[])

    return(
         <div className="container">
            <Sidebar />
            <div className="main">
                <Header />
               <Outlet />
            </div>
            </div> 
    )
}

export default ProductedRoute