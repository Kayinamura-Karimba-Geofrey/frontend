import React,{useState} from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
const LoginPopUP = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("login")

  return (
    <div className='login-popup'>
        
    <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='your name' required />}

            
            <input type="email" placeholder='your password' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currState==="sign up"?"create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" />
            <p>By continuing,i agree to terms of use and privacy.</p>
        </div>
        {currState==="login"? <p>create a new account
        ?<span onClick={()=>setCurrState('sign up')}>click here</span></p>
        :<p>Already have an account?<span  onClick={()=>setCurrState('login')}>login here</span></p>}
       
        
    </form>
    </div>
  )
}

export default LoginPopUP