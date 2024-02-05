import {useState} from 'react';
import "./Auth.css"
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () =>{
    const [login, setLogin] = useState(true);


    const pageSwipFunction = () =>{
        setLogin(!login)
    }

    return(
        <div className='main-container'>
            <ToastContainer theme="light" />
            {login === true?
                <Login 
                pageSwipFunction={pageSwipFunction}
                />:
                <Register
                setLogin={setLogin}
                pageSwipFunction={pageSwipFunction}
                /> 
            }
        </div>
    )
}

export default Auth;