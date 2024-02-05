import React,{useState,useEffect} from "react";
import useForm from '../../utils/Hooks/useForm';
import validate from '../../utils/Validation/LoginValidation';
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Login = (props) =>{

    const [values, setValues] = useState({
        email:"",
        password:"",
    })
    const [errors, setErrors] = useState({});
    const [formValidation, setFormValidation] = useState(false);


    const {handleChange, handleSubmit} = useForm({validate,values,setValues,errors,setErrors,setFormValidation});

    useEffect(()=>{},[errors])

        return(<div className='form-container'>
                <div className="form-content-right">
                <form className="form login" onSubmit={handleSubmit}>
                    <h1>Login your account</h1>
    
                    <div className="form-inputs">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input 
                        id="email"
                        type="type"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {/* {errors.email && <p>{errors.email}</p>} */}
                    </div>
    
                    <div className="form-inputs">
                        <label htmlFor='password' className="form-label">Password</label>
                        <input 
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {/* {errors.password && <p>{errors.password}</p>} */}
                    </div>
                    
                    <button className='form-input-btn' type='submit'>Sign Up</button>
                    <span className='form-input-login'>
                    Don't have an account yet? Sign up <a href="#" onClick={props.pageSwipFunction}>here</a>
                    </span>
                </form>
                </div>
    
                <div className='form-content-left'>
                    <img src='https://media.istockphoto.com/id/1322511315/vector/nest-bird-animal-black-logo-design.jpg?s=612x612&w=0&k=20&c=NsmYxR6aBl7rJ0nfUNO2olIZxrRcUwIciz_H_aE2pGk=' alt='left' className='form-img' />
                </div>
            </div>)

}

export default Login;