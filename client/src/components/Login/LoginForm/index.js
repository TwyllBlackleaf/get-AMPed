import React, { useState } from "react";
import { loginUser } from '../../../utils/API';
import Auth from '../../../utils/auth';
import "./loginStyle.css";

// import "./Login.css";

function LoginForm() {
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });
    // const [validated] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await loginUser(userData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
        }

        setUserData({
            username: '',
            email: '',
            password: '',
        });
    };

    // function for using POST route to create new user

    // function for using GET route and authentication to log in existing user and create token

    return (
        <>
            <div className="main-bg">
                <div className="login-container text-c">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                    </div>
                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <h3 class="text-whitesmoke">Login</h3>
                    <div className="container-content">
                        <form
                        // noValidate
                        // validated={validated} 
                        onSubmit={handleLoginSubmit}
                        className="flex flex-col pt-3 md:pt-8">
                            <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username" 
                                    id="logInName"
                                    name="email" 
                                    onChange={handleInputChange}
                                    value={userData.email}
                                    required
                                     />
                                
                                    <input 
                                    type="password" 
                                    id="loginPass" 
                                    className="form-control" 
                                    placeholder="*********" 
                                    name="password" 
                                    onChange={handleInputChange}
                                    value={userData.password}
                                    />
                                    </div>
                            <button 
                            type="submit" 
                            disabled={!(userData.email && userData.password)} 
                            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                            variant="sucess"
                            >
                                <span className="w-full">
                                    Submit
                                </span>
                            </button>
                        </form>

                        <div className="pt-12 pb-12 text-white text-center">
                            <p>
                                Don&#x27;t have an account?
                                <a href="https://get-amped.herokuapp.com" className="font-semibold underline">
                                     Register here.
                                </a>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="w-1/2 shadow-2xl">
                    <img className="hidden object-cover w-full h-screen md:block" src="/images/object/9.jpg" alt="" />
                </div>
            </div>

            {/* <form
            noValidate
            validated={validated}
            onSubmit={handleSignupSubmit}
            >
                <h2>Sign Up</h2>
                <div>
                    <label for="signupName">Username:</label>
                    <input 
                    type="text" 
                    name="signupName" 
                    id="signupName" 
                    name='username' 
                    onChange={handleInputChange} 
                    value={userData.username} 
                    required
                    />
                </div>
                <div>
                    <label for="signupPass">Password:</label>
                    <input 
                    type="text" 
                    name="signupPass" 
                    id="signupPass" 
                    name = 'password' 
                    onChange={handleInputChange} 
                    value={userData.password}
                    required/>
                </div>
                <div>
                    <label for="signupEmail">Email:</label>
                    <input 
                    type="text" 
                    name="signupEmail" 
                    id="signupEmail" 
                    name = 'email' 
                    onChange={handleInputChange} 
                    value={userData.email}
                    required/>
                </div>
                <button 
                type="submit"
                variant='sucess'>
                    Sign Up
                </button>
            </form> */}
        </>
    )
}

export default LoginForm;