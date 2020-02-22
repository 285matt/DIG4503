//------declare imported vars--------
const Express = require ("express");
const App = Express();
const port = 80;
const chalk = require("Chalk");

const pokemons = require("json-pokemon");
const pokeArray = pokemons;

const cors = require("cors");

//-------------------------------------

App.use(cors());
App.get("/", Express.static("client/build"));

App.get("/name/:name", (req,res)=>{
     
    let result = {"error": "Nothing found that matches that. :C"};
    
    pokeArray.forEach((value)=>{
        if(value.name.toLowerCase() == req.params.name){
             result = value;
             console.log(chalk.green(result.name));
        }
    });

    if(result.error){
        console.log(chalk.red(req.path));
    }
    res.send(result);
});

App.get("/id/:id", (req, res)=>{
    
    let result = {"error": "Nothing found that matches that. :C"};
    
    pokeArray.forEach((value)=>{
        if(value.id == req.params.id){
             result = value;
             console.log(chalk.green(result.id));
        }
    });
    if(result.error){
        console.log(chalk.red(req.path));
    }
    res.send(result);
}); 

App.listen(port,()=>{
    console.log("Server, I choose you!");
});
