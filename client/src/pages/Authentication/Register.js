import React,{useState,useEffect} from "react";
import useForm from '../../utils/Hooks/useForm';
import validate from '../../utils/Validation/Validate';
import "./Auth.css";

const Register = (props) =>{

    const [values, setValues] = useState({
        username:"",
        email:"",
        mobileno:"",
    })
    const [errors, setErrors] = useState({});
    const [formValidation, setFormValidation] = useState(false);


    const {handleChange, handleSubmit} = useForm({validate,values,setValues,errors,setErrors,setFormValidation});

    useEffect(()=>{
        if(formValidation && (Object.keys(errors).length === 0)){
            console.log("API CALL");
            // API CALLING
        setFormValidation(false)
        }else{
            setFormValidation(false)
        }
    },[formValidation,errors])


    return(
        <div className='form-container'>
        <div className='form-content-left left'>
            <img src='https://media.istockphoto.com/id/1322511315/vector/nest-bird-animal-black-logo-design.jpg?s=612x612&w=0&k=20&c=NsmYxR6aBl7rJ0nfUNO2olIZxrRcUwIciz_H_aE2pGk=' alt='left' className='form-img' />
        </div>
    
        <div className="form-content-right right">
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
                value={values.password}
                onChange={handleChange}
                />
                {errors.mobileno && <p>{errors.mobileno}</p>}
            </div>
            
            <button className='form-input-btn' type='submit'>Sign Up</button>
            <span className='form-input-login'>
                Already have an account? login <a href="#" onClick={props.pageSwipFunction}>here</a>
            </span>
        </form>
    </div>
    </div>
    )
}

export default Register