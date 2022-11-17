import React from "react";

function LoginForm(){
    return (
        <form className="FormElement">
            {/*UserName label*/}
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            {/*Password label*/}
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/> 
            <button type="submit">Submit</button>
        </form>
    )

}
export default LoginForm; 