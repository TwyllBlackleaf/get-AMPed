import React, { useState } from "react";
import { createUser } from '../../../utils/API';
import Auth from '../../../utils/auth';
import "../Login.css";

function Signup() {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });
  // const [validated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(userData);

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

  return (
    <>
    <div className="main-bg">
                <div className="login-container text-c">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                    </div>
                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <h3 className="text-whitesmoke">Sign Up</h3>
                    <div className="container-content">
      <form className="flex flex-col pt-3 md:pt-8"
        //noValidate
        //validated={validated}
        onSubmit={handleSignupSubmit}
      >
        <div className="form-group">
          <label htmlFor="signupName" className="text-white">Username:</label>
          <input
          className="form-control"
            type="text"
            id="signupName"
            name="username"
            onChange={handleInputChange}
            value={userData.username}
            required
          />
        </div>
        <div>
          <label htmlFor="displayname" className="text-white">Display Name:</label>
          <input 
          className="form-control"
            type="text" 
            id="displayname"
            name="displayname" 
            defaultValue={userData.displayname} 
            onChange={handleInputChange} 
            value={userData.displayname}
             />
        </div>

        <div>
          <label htmlFor="signupPass" className="text-white">Password:</label>
          <input
          className="form-control"
            type="password"
            id="signupPass"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
            required />
        </div>
        <div>
          <label htmlFor="signupEmail" className="text-white">Email:</label>
          <input
          className="form-control"
            type="text"
            id="signupEmail"
            name="email"
            onChange={handleInputChange}
            value={userData.email}
            required />
        </div>
        <button
        className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
          disabled={!(userData.username && userData.email && userData.password)} 
          type="submit"
          variant="sucess">
          Sign Up
        </button>
      </form>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Signup;