# Animated Avatar Generator App

Web-based application that utilizes the MultiAvatar API to create animated avatars based on user input. Along with the customization options, the app also features a "heart" button that allows users to save their favorite avatars to a list for later use. The application is easily accessible through any web browser, making it a fun and convenient tool for creating unique avatars.


![image](https://user-images.githubusercontent.com/103332504/236951137-872d38d9-7630-4cc1-b90b-e2af29ca7b2f.png)

Link to the site: https://animated-avatar-generator-app.onrender.com/

Tech used: HTML, CSS, React, JavaScript, NodeJS, Express, MongoDB & Mongoose.




# Install

-From root:
- cd server && npm run full-install. This script will install everything you need for the server and the client.

---

# Setting it up

-Server-side:
- Create a `.env` file and add the following as `key = value`
  - PORT = `8000` (can be any port example: 3000)
  - MONGO_URI = `your db string`

-Client-side:
- In client/package.json replace the proxy string with the following: "http://localhost:PORT". Here use the number of port you want to use in the server-side.
- Replace all the fetch requests to the animated avatar server on render from components to "/...". For example in the Generator component, replace fetch 'https://animated-avatar-generator.onrender.com/addAvatar' to '/addAvatar'
  
---


# Run

From root:
-cd server && npm run dev. This will initialize both client and server.
