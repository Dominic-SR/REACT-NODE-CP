import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useForm from '../../utils/Hooks/useForm';
import validate from '../../utils/Validation/LoginValidation';
import { AxiosInstance } from "../../utils/api/AxiosInstance";
import { toast } from "react-toastify";
import "./Auth.css";


const Login = () =>{
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email:"",
        password:"",
    })
    const [errors, setErrors] = useState({});
    const [formValidation, setFormValidation] = useState(false);


    const {handleChange, handleSubmit} = useForm({validate,values,setValues,errors,setErrors,setFormValidation});

    useEffect(()=>{ 
        if(formValidation && (Object.keys(errors).length === 0)){
            let payload = {
                "user_email":values.email,
                "user_password":values.password,
               }
               
               //LOGIN API CALLING
                AxiosInstance().post(`/user/login`,payload).then((res)=>{
                if(res?.status === 200 && res.data.status){
                    toast.success(res?.data?.message, {onClose:()=>{ 
                        localStorage.setItem('auth',JSON.stringify(res?.data?.token))
                        localStorage.setItem('userData',JSON.stringify(res?.data?.data))
                        navigate('/home')
                    }, autoClose:1000, progressClassName:"toast-success"}   )
                }else{
                    toast.error(res?.data?.message,{progressClassName:"toast-error"})
                }
                }).catch((er) => er);

            setFormValidation(false)
            }else{
                setFormValidation(false)
            }
    },[errors])

    const regiterPage = () =>{
        navigate('/register')
    }
    
        return(<div className='form-container'>
                <div className="login-form-content">
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
                        {errors.email && <p>{errors.email}</p>}
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
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    
                    <button className='form-input-btn' type='submit'>Sign Up</button>
                    <span className='form-input-login'>
                    Don't have an account yet? Sign up <a href="#" onClick={() => regiterPage()}>here</a>
                    </span>
                </form>
                </div>
    
            </div>)

}

export default Login;