import React from 'react'
import Pep13 from '../images/pep13.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <>
    <section className="login">
        <div className="container mt-5">
        <div className="login-image">
        <img src={Pep13} alt=""/>
                </div>
            <div className="login-content">
                <div className="login-form">
                    <form className="register-form" id='register-form'>
                        <div className="form-group">
                        <TextField id="standard-basic" label="Name" type="text" variant="standard" color='warning' />
                        </div>
                        <div className="form-group">
                        <TextField id="standard-basic" label="Password" type="password" variant="standard" color='warning'/>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name='login' id='login' className='form-submit' value="LOG IN" />
                        </div>
                    </form>
                    <p>Forgot Password</p>
                </div>
                <div className="gotologin">  <button>New to Pepperfry? Register Here</button></div>
                <div className="loginbyg"><p>OR Continue with <span><FacebookRoundedIcon fontSize='large'/> <GoogleIcon fontSize='large'/></span></p> </div>
            </div>
        </div>
    </section>
    </>
  )
}
