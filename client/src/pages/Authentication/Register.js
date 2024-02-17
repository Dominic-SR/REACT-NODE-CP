import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useForm from '../../utils/Hooks/useForm';
import validate from '../../utils/Validation/Registervalidation';
import { AxiosInstance } from "../../utils/api/AxiosInstance";
import { toast } from "react-toastify";
import "./Auth.css";


const Register = (props) =>{
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username:"",
        email:"",
        mobileno:"",
        password:"",
        cpassword:"",
        about:""
    })
    const [errors, setErrors] = useState({});
    const [formValidation, setFormValidation] = useState(false);


    const {handleChange, handleSubmit} = useForm({validate,values,setValues,errors,setErrors,setFormValidation});
    useEffect(()=>{
        if(formValidation && (Object.keys(errors).length === 0)){
   
            let payload = {
                "user_name":values.username,
                "user_email":values.email,
                "user_mobileno":values.mobileno,
                "user_password":values.password,
                "user_about":values.about
             }
            
             //REGISTER API CALLING
            AxiosInstance().post(`/user/register`,payload).then((res)=>{
                if(res?.status === 200 && res.data.status){
                    toast.success(res?.data?.message, {onClose:()=>{ props.setLogin(true)}, autoClose:1000, progressClassName:"toast-success"}   )
                }else{
                    toast.error(res?.data?.message,{progressClassName:"toast-error"})
                }
                }).catch((er) => er);
   
        setFormValidation(false)
        }else{
            setFormValidation(false)
        }
    },[formValidation,errors])

    const loginPage = () =>{
        navigate('/login')
    }

    return(
        <div className='form-container'>
      

        <div className='register-form-content'>
          
            <form className="form" onSubmit={handleSubmit}>
            <h1>Get Started With us today! Create Your Accounts</h1>
            
            <div className="form-inputs">
                <label htmlFor='username' className="form-label">User Name</label>
                <input 
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>

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
                <label htmlFor='mobileno' className="form-label">Mobile No</label>
                <input 
                id="mobileno"
                type="number"
                name="mobileno"
                className="form-input"
                placeholder="Enter your MobileNo"
                value={values.mobileno}
                onChange={handleChange}
                />
                {errors.mobileno && <p>{errors.mobileno}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor='password' className="form-label">Password</label>
                <input 
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your Password"
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor='cpassword' className="form-label">Confirm password</label>
                <input 
                id="cpassword"
                type="password"
                name="cpassword"
                className="form-input"
                placeholder="Enter your Confirm Password"
                value={values.cpassword}
                onChange={handleChange}
                />
                {errors.cpassword && <p>{errors.cpassword}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor='mobileno' className="form-label">About us</label>
                <textarea 
                id="about"
                type="text"
                name="about"
                className="form-input"
                placeholder="Enter your About"
                value={values.about}
                onChange={handleChange}
                ></textarea>
                {errors.about && <p>{errors.about}</p>}
            </div>
            
            <button className='form-input-btn' type='submit'>Sign Up</button>
            <span className='form-input-login'>
                Already have an account? login <a href="#" onClick={() => loginPage()}>here</a>
            </span>
        </form>
        
        </div>
    
       
    </div>
    )
}

export default Register