import React from "react";
import "./Login.css";

function Login() {
    return (
        <>
            <form>
                <h2>Log In</h2>
                <div>
                    <label for="loginName">Username: </label>
                    <input type="text" name="loginName" id="loginName" required></input>
                </div>
                <div>
                    <label for="loginPass">Password: </label>
                    <input type="text" name="loginPass" id="loginPass" required></input>
                </div>
                <button type="submit">Log In</button>
            </form>
            <form>
                <h2>Sign Up</h2>
                <div>
                    <label for="signupName">Username:</label>
                    <input type="text" name="signupName" id="signupName" required></input>
                </div>
                <div>
                    <label for="signupPass">Password:</label>
                    <input type="text" name="signupPass" id="signupPass" required></input>
                </div>
                <div>
                    <label for="signupEmail">Email:</label>
                    <input type="text" name="signupEmail" id="signupEmail" required></input>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default Login;