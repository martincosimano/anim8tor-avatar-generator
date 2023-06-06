# Anim8tor: Avatar Generator App

Web-based application that utilizes the MultiAvatar API to create animated avatars based on user input. The app also features a "heart" button that allows users to save their favorite avatars to a list where they can upvote or delete them.


![image]![image](https://github.com/martincosimano/anim8tor-avatar-generator/assets/103332504/e5c8cf13-34b1-4b4f-a02d-944c320ccdcb)



Link to the site: https://anim8tor.vercel.app/

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
