import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';

function UserProfile( { isLoggedIn, isLoading, userInfo, setIsLoggedIn, setUserInfo} ){
    const navigate = useNavigate(); 
    
    //On the first render, isLoggedIn is false (because no one signed in)
    useEffect(()=> {
        //So, if we're signed in, we'll go to userProfile (which is home)
        if (!isLoggedIn && !isLoading) return navigate('/login'); 

    }, [isLoggedIn, isLoading]); 

    return (
    <React.Fragment>
        <Header setIsLoggedIn= {setIsLoggedIn} setUserInfo = {setUserInfo}/>
         <div>  
            <h1> User Profile </h1>
            <p>
                <strong>Name: </strong>
                {userInfo.displayName}
            </p>
            <p>
                <strong>Email: </strong>
                {userInfo.email}
            </p>
            <p>
                <strong>ID: </strong>
                {userInfo.uid}
            </p>
            <p></p>

         </div>
    </React.Fragment>
    );

}

export default UserProfile;  