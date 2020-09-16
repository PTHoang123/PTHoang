import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {

     const [state, dispatch] = useStateValue();
    const signIn = () => {
      auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })
      }).catch(error => alert(error.massage))
    };
    return (
        <div className= "login">
            <div className="login__logo">
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png"/>
                <img src= "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>

                
            </div>
            <button type="submit" onClick={signIn}>Đăng Nhập</button>
        </div>
    )
}

export default Login
