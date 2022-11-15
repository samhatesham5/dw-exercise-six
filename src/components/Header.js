import React from "react";
import { Link } from "react-router-dom";

//Creating our nav bar
function Header(){
    return(
        <nav>
            <a href= "/">
                <p>Home</p>
            </a>
            <a href="/login">
                <p>Login</p>
            </a>
            <a href="/create">
                <p>Sign up</p>
            </a>
        </nav>
    );
}

export default Header; 