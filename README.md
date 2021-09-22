# get-AMPed
Project 3 - Creating a full-featured About Me Page (AMP)

## Description
We created get-AMPed as a tool to help user have easy access to their profiles and be able to connect it to all other softwares. IT eliminates the need to keep creating profiles for every account you create. You just use your AMP account and we take care of the rest. 

## Table of Contents

* [How it works](#how-it-works)
* [Features](#features)
* [Technoliges Used](#technologies-used)
* [Future Development](#future-development)
* [Contributors](#contributors)
* [Deployed URL](#deployed-url)

## How it works:

## Features:

## Technologies Used:
1. React
```javascript
import React, { useEffect, useState } from "react";
```
![reactlogo](https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png)


2. Express/Node
```javascript
const router = require('express').Router();
```
![nodejslogo](https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png)


3. Mongoose
```javascript
const userLinkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});
```
<img src="https://miro.medium.com/max/648/1*iDvsmUwzZQxJSKdL0xzwIA.png" alt="mongooselogo" height="125"/>


4. Tailwind

<img src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" alt="tailwindlogo" height="200">


## Future Development
- Image Upload for profile photo
- Update user data
- Mobile responsive design


## Contributors
[Deb Orler](https://github.com/dorler), [Kat Dixon](https://github.com/TwyllBlackleaf), [Sue Kim](https://github.com/suekimpaulsen), and [John Mohlenkamp](https://github.com/Mohlenkamp).
Please click the name to visit their GitHub.

## Deployed URL
via Heroku https://get-amped.herokuapp.com/
