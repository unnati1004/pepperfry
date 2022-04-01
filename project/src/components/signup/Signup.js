import React from 'react'
import Pep12 from '../images/pep12.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

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
                           <input type="text" name='name' id='name' autoComplete='off' placeholder='Name' />
                       </div>
                       <div className="form-group">
                           <input type="number" name='mobile' id='mobile' autoComplete='off' placeholder='Mobile Number' />
                       </div>
                       <div className="form-group">
                           <input type="email" name='email' id='email' autoComplete='off' placeholder='Email' />
                       </div>
                       <div className="form-group">
                           <input type="password" name='password' id='password' autoComplete='off' placeholder='Password' />
                       </div>
                       <div className="form-group form-button">
                           <input type="submit" name='signup' id='signup' className='form-submit' value="REGISTER" />
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
