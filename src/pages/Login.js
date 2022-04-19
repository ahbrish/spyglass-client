import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();

    const logMeIn = () =>{
        localStorage.setItem("user", "test");
        navigate("/home");
    }

    return(
        <div className='login'>
            <h2> Welcome to login page</h2>
            <p> Please click the button to login</p>
            <button onClick={logMeIn}Login></button>
        </div>
    )
}

export default Login;