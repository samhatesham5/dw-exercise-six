import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

//Creating our nav bar
function Header({setIsLoggedIn, setUserInfo}){
    function logout(){
        const auth = getAuth();
            signOut(auth)
            .then(() => {
                //We're gonna make this empty
                setUserInfo({});
                //Set logged in false
                setIsLoggedIn(false); 
            })
            .catch((error) => {
            console.warn(error); 
        })
    };
    return(

        <nav>
            {/*Link - Comes from React Router; faster way of navigating through links */}
            <Link to= "/">
                <p>Home</p>
            </Link>
            <Link to="/login">
                <p>Login</p>
            </Link>
            <Link to="/create">
                <p>Sign up</p>
            </Link>
            <p className="signOut" onClick={() => logout()}>Sign Out</p>
        </nav>
    );
}

export default Header; 