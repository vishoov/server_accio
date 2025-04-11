//handler function

const signUp = (req, res)=>{
    const {name, Country} = req.body;
    //req.body -> data sent from the client to the server
    res.send(`Welcome to the signup page! ${name} from ${Country}`);
};

const routeParam = (req, res)=>{
    let id = req.params.id;
    console.log("route is being handled")
    //req.params -> object -> contains all the route parameters
    res.send(`User ID is ${id}`);
}


module.exports = { signUp, routeParam };