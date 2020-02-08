//------declare imported vars--------
const Express = require ("express");
const App = Express();
const port = 80;
const chalk = require("Chalk"); 

const pokemons = require("json-pokemon");
const getPokemons = require("json-pokemon/getPokemon");
const pokeArray = pokemons;

const name = getPokemons.getPokemonByName();
const id = getPokemons.getPokemonById();

//-------------------------------------
App.get("/name/:name", (req,res)=>{
     
    let result = {"error": "Nothing found that matches that. :C"};
    
    pokeArray.forEach((value)=>{
        if(value.name.toLowerCase() == req.params.name){
             let index = value.id - 1;
             result = pokeArray[index];
        }
    });

    //console.log(result);

    if (result.error){
        console.log(chalk.red(req.path));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
        // console.log(result);
    }
    return result;
});

App.get("/id/:id", (req, res)=>{
    
    let result = {"error": "Nothing found that matches that. :C"};
    
    pokeArray.forEach((value)=>{
        if(value.id == req.params.id){
             let index = value.id - 1;
             result = pokeArray[index];
        }
    });
//debugging
    //console.log(result);

    if (result.error){
        console.log(chalk.red(req.path));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
        // console.log(result);
    }
    return result;
}); 

App.listen(port,()=>{
    console.log("Server is up!");
});
