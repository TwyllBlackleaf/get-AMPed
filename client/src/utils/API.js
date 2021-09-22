import axios from 'axios';

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

// get user data for any user's page 
export const getUserData = (userId) => {
    return fetch(`api/users/profile/${userId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
  };

// save userlink data for a logged in user
export const saveUserLink = (linkData, token) => {
  return fetch('/api/users/login', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(linkData),
  });
};
  
// image
const url = "http://localhost:3000/api/image";

export const getItems = () => axios.get(url);
export const createItem = (image) => axios.post(url, image);

