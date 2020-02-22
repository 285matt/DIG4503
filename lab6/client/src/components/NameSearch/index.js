import React from "react";

class NameSearch extends React.Component {

    readName(event){

        event.preventDefault();

        let element = document.querySelector("#pokeName");
        //console.log(element.value);

        fetch("http://localhost:80/name/" + element.value.toLowerCase()).then((Response) => {
            return Response.json();
        }).then((ProcessedResponse) => {
            console.log(ProcessedResponse);
            let reporting = document.querySelector("#reportingArea");

            if(ProcessedResponse.error){
                reporting.innerHTML = "Sorry, that doesn't exist. We returned: " + ProcessedResponse.error;
            } else{
                reporting.innerHTML = "The pokemon with that name has a Pokedex # of: " + ProcessedResponse.id + " and type(s): "+ ProcessedResponse.typeList + ".";
            }
        });
        //console.log("clicked!");
    };

    render(){
        return(
            <div>
                <form onSubmit = {this.readName}>
                    <h1>Name</h1>
                    <input type = "text" id = "pokeName" />
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default NameSearch;