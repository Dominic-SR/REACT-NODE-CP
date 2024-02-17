import { useNavigate,Outlet} from "react-router-dom";
import "./Auth.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () =>{
    return(
        <div className='main-container'>
            <ToastContainer theme="light" />
            <Outlet />
        </div>
    )
}

export default Auth;