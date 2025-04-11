//express js feature -> router 
// router helps us in creating the routes in a modular way
const router = require("express").Router();
const  { signUp, routeParam } = require("../controllers/users.controllers");
//post route /signup -> welcome to the signup page



router.post("/signup", signUp);

//login route -> post -> /login -> welcome to the login page
router.post("/login", (req, res)=>{
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

router.use(middleware);

//DYNAMIC ROUTING
// whenever we have to create a route with dynamic data -> we use dynamic routing

//1. route parameters
//product routes, user routes, order routes, cart routes 
router.get("/user/:id", routeParam)

//http://localhost:3000/user/hello
//2. query parameters
//querying the data from server -> search, filter, sort, paginate
router.get("/search", (req, res)=>{
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


module.exports = router;
// exporting the router object to use it in the server.js file