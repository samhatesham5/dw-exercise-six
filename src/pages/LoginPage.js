
import React, { useEffect } from 'react';
//Allows us to move around in the app without clicking links
import { useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInfo }) {

    const navigate = useNavigate(); 
        
    useEffect(()=> {
        //So, if we're signed in, we'll go to userProfile (which is home)
        if (isLoggedIn) return navigate("/"); 

    }, [isLoggedIn]); 

    return (
    <React.Fragment>
        <Header setIsLoggedIn= {setIsLoggedIn} setUserInfo = {setUserInfo}/>
        <div className='PageWrapper'>
            <h1>Login Page </h1>
            <LoginForm />
        </div>
    </React.Fragment>
    );

}

export default LoginPage;  