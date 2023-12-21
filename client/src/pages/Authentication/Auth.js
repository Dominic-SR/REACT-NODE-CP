import react from 'react';
import "./Auth.css"

const Auth = () =>{
    return(
        <>
           <div className='auth-container'>
            <div className='auth-wrapper'>
                <div className='login-container'>
                    <div className='image-wrapper'>
                        <img src="https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg" alt='icon' />
                    </div>
                    <div className='login-wrapper'>
                        <div className='form-group'>
                            <input type='email' placeholder='email' />
                            <input type='password' placeholder='password' />
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default Auth;