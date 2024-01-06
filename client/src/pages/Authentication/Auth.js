import react,{useState} from 'react';
import useForm from '../../utils/Hooks/useForm';
import validate from '../../utils/Validation/Validate';
import "./Auth.css"
import Login from './Login';
import Register from './Register';

const Auth = () =>{
    const [login, setLogin] = useState(false);
    
    const loginPageFunction = () =>{
        setLogin(true)
    }

    const signUpFunction = () =>{

        setLogin(false)
    }

    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    return(
        <div className='main-container'>
            {login === true?
                <Login 
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                signUpFunction={signUpFunction}
                />:
                <Register
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loginPageFunction={loginPageFunction}
                /> 
            }
        </div>
    )
}

export default Auth;