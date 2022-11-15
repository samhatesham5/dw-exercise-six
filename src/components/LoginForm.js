import React from "react";

function LoginForm(){
    return (
        <form className="FormElement">
            {/*UserName label*/}
            <label htmlFor="userName">Username</label>
            <input type="text" name="userName"/>
            {/*Password label*/}
            <label htmlFor="userPassword">Password</label>
            <input type="password" name="userPassword"/> 
            <button type="submit">Submit</button>
        </form>
    )

}
export default LoginForm; 