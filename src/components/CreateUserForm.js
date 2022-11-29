import React from "react";

function CreateUserForm({ signUpUser }){
    return (
        <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
            {/*onSubmit - React thing; when we submit the form, we pass the value of e to signUpUser*/}
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/> 
            <button type="submit">Submit</button>
        </form>
    )

}
export default CreateUserForm; 