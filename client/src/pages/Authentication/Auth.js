import {useState} from 'react';
import "./Auth.css"
import Login from './Login';
import Register from './Register';

const Auth = () =>{
    const [login, setLogin] = useState(false);


    const pageSwipFunction = () =>{
        setLogin(!login)
    }

    

    return(
        <div className='main-container'>
            {login === true?
                <Login 
                pageSwipFunction={pageSwipFunction}
                />:
                <Register
                pageSwipFunction={pageSwipFunction}
                /> 
            }
        </div>
    )
}

export default Auth;