import react,{useState} from 'react';
import useForm from '../../utils/Hooks/useForm';
import validate from '../../utils/Validation/Validate';
import "./Auth.css"

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
        
            {/* <span className='close-btn'>x</span> */}
            {login?
                <div className='form-container'>
                <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
    
                    <div className="form-inputs">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input 
                        id="email"
                        type="email"
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
                    Don't have an account yet? Sign up <a href="#" onClick={signUpFunction}>here</a>
                    </span>
                </form>
                </div>
    
                <div className='form-content-left'>
                    <img src='https://media.istockphoto.com/id/1322511315/vector/nest-bird-animal-black-logo-design.jpg?s=612x612&w=0&k=20&c=NsmYxR6aBl7rJ0nfUNO2olIZxrRcUwIciz_H_aE2pGk=' alt='left' className='form-img' />
                </div>
                </div>:<div className='form-container'>
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
                        type="email"
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

                    <div className="form-inputs">
                        <label htmlFor='password2' className="form-label">Confirm Password</label>
                        <input 
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Enter your Confirm password"
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    
                    <button className='form-input-btn' type='submit'>Sign Up</button>
                    <span className='form-input-login'>
                        Already have an account? login <a href="#" onClick={loginPageFunction}>here</a>
                    </span>
                </form>
            </div>
            </div>
            }
        </div>
    )
}

export default Auth;