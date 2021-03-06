//------declare imported vars--------
const Express = require ("express");
const App = Express();
const port = 80;
const chalk = require("Chalk"); 

const pokemons = require("json-pokemon");
const pokeArray = pokemons;

//-------------------------------------
App.use(Express.json());
App.use("/", Express.static("public"));

App.get("/name/:name", (req,res)=>{
     
    let result = {"error": "Nothing found that matches that. :C"};
    
    pokeArray.forEach((value)=>{
        if(value.name.toLowerCase() == req.params.name){
             result = value;
             console.log(chalk.green(result.name));
        }
    });

    if(result.error){
        console.log(chalk.red(req.params.name));
    }
    res.json(result);
});

App.get("/id/:id", (req, res)=>{
    
    let result = {"error": "Nothing found that matches that. :C"};
    
    pokeArray.forEach((value)=>{
        if(value.id == req.params.id){
             result = value;
             console.log(chalk.green(result.id));
        }
    });
//debugging
    //console.log(result);
    if(result.error){
        console.log(chalk.red(req.params.id));
    }
    res.json(result);
}); 

App.listen(port,()=>{
    console.log("Server is up!");
});
