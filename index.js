// Create a web server to listen to incoming requests
// Use express.js to enable it

// using "type" : "commonjs" in package.json
// const express = require("express");

// using "type": "module" in package.json
import express from "express";
import os from "os";
import cors from "cors";        // cors to prevent CSRF: Cross-Site Request Forgery

const PORT = 8888;              // create a custom port that the app listens to
const HOST = "127.0.0.1";       // domain (127.0.0.1 === localhost)
const OS = os;                  // logging the platform running the server
const ENV = "DEV";              // set the mode of development of this project (nothing to do with .env, DEV, UAT, PROD)

const app = express();          // invoke express library to be consume to run the web server
app.use(cors());                // allow our app use cors library
app.use(express.json());        // middleware to handle JSON data 
// Create endpoints that this application listens to

app.get("/", (req, res) => {   // Listen to GET request (root directory of the application "/")
    res.statusCode = 200;        // 200 (success), 201 (no-content), 404 (not-found), 403 (permission-denied), 500 (internal server error)
    const msg = "Hello FSD Learner. I am running Node.js application.";
    res.send(msg);
});

app.get("/about", (req, res) => {
    res.statusCode = 200;
    const msg = "About this web iste.";
    res.send(msg);
});

// creating a new endpoint for login
app.post("/login", (req, res) => {
    
    const pseudoUsername = "user1";             // pseudo username
    const pseudoPassword = "pwd";               // pseudo password

    const { username, password } = req.body;    // obtain the username and password as an object

    if(username === pseudoUsername && password === pseudoPassword)
        return res.status(200).send({msg: "You have logged in successfully"});

    return res.status(403).send({msg: "Permission denied. Please try again."});
})

// Set up the app to listen iva PORT and HOST (http://127.0.0.1:8888)
app.listen(PORT, HOST);
// console.log(`Running service on ${HOST}:${PORT} on os ${OS.platform()}.`)