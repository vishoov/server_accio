//project building
const express = require('express');
//import express from the express dependancy

//we call our server -> APP

const app = express();
//setup the server app using express -> express instance 

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

//post route /signup -> welcome to the signup page
app.post("/signup", (req, res)=>{
    const {name, Country} = req.body;
    //req.body -> data sent from the client to the server
    res.send(`Welcome to the signup page! ${name} from ${Country}`);
});

//login route -> post -> /login -> welcome to the login page
app.post("/login", (req, res)=>{
    res.send("Welcome to the login page!");
});

const middleware = (req, res, next)=>{
   //logging middleware -> it logs or tracks the request and response
//    req -> object -> contains all the information about the request
// req -> method, url, headers, body, params, query
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleString();
    
    console.log(`METHOD: ${method}, URL: ${url}, TIME: ${time}`);

    next();
}

app.use(middleware);

//DYNAMIC ROUTING
// whenever we have to create a route with dynamic data -> we use dynamic routing

//1. route parameters
//product routes, user routes, order routes, cart routes 
app.get("/user/:id", (req, res)=>{
    let id = req.params.id;
    console.log("route is being handled")
    //req.params -> object -> contains all the route parameters
    res.send(`User ID is ${id}`);
})

//http://localhost:3000/user/hello
//2. query parameters
//querying the data from server -> search, filter, sort, paginate
app.get("/search", (req, res)=>{
    let query = req.query.q;
    let filter = req.query.filter;
    //req.query -> object -> contains all the query parameters
    res.send(`Search results for ${query}, filter: ${filter}`);
})
//http://localhost:3000/search?q=hello&filter=age_less_than_18

//express.js -> request -> 
//req -> data

// JSON -> Headers, body -> infomation about the request


//localhost:3000/ -> home page -> root route    


//local system -> ports -> 3000, 8080, 5000, 4000


//port listener provided to us by express 
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    //listening to the server on port 3000
    //callback function to check if the server is running or not
});


//app.listen(port number, callback function)