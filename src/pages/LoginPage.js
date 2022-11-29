
import React, { useCallback, useState, useEffect } from 'react';
//Allows us to move around in the app without clicking links
import { useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInfo }) {
    const [errors, setErrors] = useState(); 
    const navigate = useNavigate(); 
        
    useEffect(()=> {
        //So, if we're signed in, we'll go to userProfile (which is home)
        if (isLoggedIn) return navigate("/"); 

    }, [isLoggedIn, navigate]); 

    //useCallback allows loginUser to run ONLY when e has changed (so when we update e)
    const loginUser = useCallback((e) => {
        //e represents the form at it's current state
        //Don't want the form to submit on default
        e.preventDefault(); 
        console.log(e); 

        //Get the email and password from the form
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        console.log({email, password}); 

        const auth = getAuth(); 
        signInWithEmailAndPassword(auth, email, password) 
            .then((userCredential) => {
                   // Signed in 
                   const user = userCredential.user;
                   //Get access to the set state values
                   setIsLoggedIn(true);
                   setUserInfo ({
                       email: user.email,
                       displayName: user.displayName, 
                       password: user.password, 
                       uid: user.uid,
                       accessToken: user.accessToken,
                    });
                setErrors(); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn({error, errorCode, errorMessage}); 
                setErrors(errorMessage); 
            });
 
    }, [setErrors, setIsLoggedIn, setUserInfo]);

    return (
    <React.Fragment>
        <Header isLoggedIn = {isLoggedIn} setIsLoggedIn= {setIsLoggedIn} setUserInfo = {setUserInfo}/>
        <div className='PageWrapper'>
            <h1>Login Page </h1>
            <LoginForm loginUser={loginUser}/>
        </div>
    </React.Fragment>
    );

}

export default LoginPage;  