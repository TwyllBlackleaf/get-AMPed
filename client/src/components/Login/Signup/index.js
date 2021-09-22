import React, { useState } from "react";
import { createUser } from '../../../utils/API';
import Auth from '../../../utils/auth';

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
      <form
        //noValidate
        //validated={validated}
        onSubmit={handleSignupSubmit}
      >
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="signupName">Username:</label>
          <input
            type="text"
            id="signupName"
            name="username"
            onChange={handleInputChange}
            value={userData.username}
            required
          />
        </div>
        <div>
          <label htmlFor="displayname">Display Name:</label>
          <input 
            type="text" 
            id="displayname"
            name="displayname" 
            defaultValue={userData.displayname} 
            onChange={handleInputChange} 
            value={userData.displayname}
             />
        </div>

        <div>
          <label htmlFor="signupPass">Password:</label>
          <input
            type="password"
            id="signupPass"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
            required />
        </div>
        <div>
          <label htmlFor="signupEmail">Email:</label>
          <input
            type="text"
            id="signupEmail"
            name="email"
            onChange={handleInputChange}
            value={userData.email}
            required />
        </div>
        <button
          disabled={!(userData.username && userData.email && userData.password)} 
          type="submit"
          variant="sucess">
          Sign Up
        </button>
      </form>
    </>
  )
}

export default Signup;