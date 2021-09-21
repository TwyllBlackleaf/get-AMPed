import React from "react";
// import "./Login.css";


import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function SignUpForm() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '', aboutme: '', displayname: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { username, email, password, aboutme, displayname } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Sign Up</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">UserName:</label>
          <input type="text" name="username" defaultValue={username} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password (8 characters minimum):</label>
          <input type="password" name="password" minlength = "8" required defaultValue={password} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="displayname">Display Name:</label>
          <input type="text" name="displayname" defaultValue={displayname} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="aboutme">Tell a little about yourself:</label>
          <textarea name="aboutme" rows="5" defaultValue={aboutme} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SignUpForm;

