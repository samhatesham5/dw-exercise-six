import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import CreateUserForm from '../components/CreateUserForm';
import Header from '../components/Header';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 

function CreatePage({setIsLoggedIn, setUserInfo, isLoggedIn}){

    const [errors, setErrors] = useState(); 

    const navigate = useNavigate(); 
    
    useEffect(()=> {
        //So, if we're signed in, we'll go to userProfile (which is home)
        if (isLoggedIn) return navigate('/'); 

    }, [isLoggedIn, navigate]); 

    const signUpUser = useCallback(
        //You can "e" what you want but it's an argument placeholder
        (e) => {
            //We don't want to HTML default on anything for the form
            e.preventDefault(); 
            //Targeting the value of the email input
            const email = e.currentTarget.email.value;
            //Targeting the value of the password input
            const password = e.currentTarget.password.value;

            console.log({email}, {password}); 

            const auth = getAuth(); 

        //Creating a user (copied from firebase docs)
        createUserWithEmailAndPassword(auth, email, password)
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
                //Make our errors empty
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
            {/* React Fragment serves as a kind of parent container so we can add Header inside*/}
            <Header isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn} setUserInfo = {setUserInfo}/>
            <div className='PageWrapper'>
                <h1>Create Page</h1>
                <CreateUserForm signUpUser = {signUpUser} />
                <p>{errors}</p>
            </div>
        </React.Fragment>
    );

}

export default CreatePage;  