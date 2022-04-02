import React from 'react'
import Pep12 from '../images/pep12.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import "./Signup.css"
export default function Signup() {
  return (
   <>
   <section className="signup">
       <div className="container mt-5">
       <div className="signup-image">
       <img src={Pep12} alt=""/>
               </div>
           <div className="signup-content">
               <div className="signup-form">
                   <form className="register-form" id='register-form'>
                       <div className="form-group">
                           {/* <input type="text" name='name' id='name' autoComplete='off' placeholder='Name' /> */}
                           <TextField id="standard-basic" label="Name" type="text" variant="standard" color='warning' />
                       </div>
                       <div className="form-group">
                       <TextField id="standard-basic" label="Mobile Number" type="number" variant="standard" color='warning' />
                       </div>
                       <div className="form-group">
                       <TextField id="standard-basic" label="Email" type="email" variant="standard" color='warning' />
                       </div>
                       <div className="form-group">
                       <TextField id="standard-basic" label="Password" type="password" variant="standard" color='warning'/>
                       </div>
                       <div className="form-group form-button">
                           <input type="submit" name='signup' id='signup' className='form-submit' value="REGISTER"/>
                       </div>
                   </form>
                   <p>By registering you agree to our Terms & Conditions</p>
               </div>
               <div className="gotologin">  <button>Exsisting User? Log In</button></div>
               <div className="loginbyg"><p>OR Continue with <span><FacebookRoundedIcon fontSize='large'/> <GoogleIcon fontSize='large'/></span></p> </div>
           </div>
       </div>
   </section>
   </>
  )
}
