import React from "react";
import "./Auth.css";

const Register = (props) =>{


    return(
        <div className='form-container'>
        <div className='form-content-left left'>
            <img src='https://media.istockphoto.com/id/1322511315/vector/nest-bird-animal-black-logo-design.jpg?s=612x612&w=0&k=20&c=NsmYxR6aBl7rJ0nfUNO2olIZxrRcUwIciz_H_aE2pGk=' alt='left' className='form-img' />
        </div>
    
        <div className="form-content-right right">
        <form className="form" onSubmit={props.handleSubmit}>
            <h1>Get Started With us today! Create Your Accounts</h1>
            
            <div className="form-inputs">
                <label htmlFor='username' className="form-label">User Name</label>
                <input 
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                value={props.values.username}
                onChange={props.handleChange}
                />
                {props.errors.username && <p>{props.errors.username}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor='email' className="form-label">Email</label>
                <input 
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={props.values.email}
                onChange={props.handleChange}
                />
                {props.errors.email && <p>{props.errors.email}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor='mobileno' className="form-label">Mobile No</label>
                <input 
                id="mobileno"
                type="number"
                name="mobileno"
                className="form-input"
                placeholder="Enter your MobileNo"
                value={props.values.password}
                onChange={props.handleChange}
                />
                {props.errors.mobileno && <p>{props.errors.mobileno}</p>}
            </div>
            
            <button className='form-input-btn' type='submit'>Sign Up</button>
            <span className='form-input-login'>
                Already have an account? login <a href="#" onClick={props.loginPageFunction}>here</a>
            </span>
        </form>
    </div>
    </div>
    )
}

export default Register