import pokemon from 'json-pokemon';

export default (req, res) => {

    let result = [{"id": "Error. Try putting in a different type, or make sure the first letter is capitalized"}];

    // let pokemon = getPokemon.filter.type(req.query.type);

    for(let i=0; i<pokemon.length; i++){
        //console.log(pokemon[i]);
        for(let p=0; p<pokemon[i].typeList.length; p++){
            //console.log(pokemon[i].typeList[p]);

            if(pokemon[i].typeList[p] == req.query.type){
                result.push(pokemon[i])
            }

        }
    }
    if(result.length > 1){
        result.shift();
    }

    res.json(result);

}