//project building
const express = require('express');
//import express from the express dependancy

//we call our server -> APP

const app = express();
//setup the server app using express -> express instance 

const userRoutes = require("./view/user.routes");


app.use(express.json());//helps in parsing the json data from the client to the server
//client request -> recieve request from the client-> server responds to the request

//route handler 
// amazon.in -> signup, login, search, cart, checkout
//app = server
//route handler -> app.METHOD("/path", callback function)

app.get("/", (req, res)=>{
    // req and res are treated as OBJECTS
    // const userinfo = req.body;
    res.send("Hello World!");
});
//user routes
app.use("/users", userRoutes);

//products 
// app.use("/products", productRoutes);

//use the userRoutes in the app
//port listener provided to us by express 
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    //listening to the server on port 3000
    //callback function to check if the server is running or not
});


//app.listen(port number, callback function)