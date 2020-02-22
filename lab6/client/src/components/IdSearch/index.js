import React from "react";

class IdSearch extends React.Component{

    readId(event){

        event.preventDefault();

        let element = document.querySelector("#pokeId");
        //console.log(element.value);

        fetch("http://localhost:80/id/" + element.value).then((Response) => {
            return Response.json();
        }).then((ProcessedResponse) => {
            console.log(ProcessedResponse);
            let reporting = document.querySelector("#reportingArea");

            if(ProcessedResponse.error){
                reporting.innerHTML = "Sorry, that doesn't exist. We returned: " + ProcessedResponse.error;
            } else{
                reporting.innerHTML = "The pokemon with that id has the name: "  + ProcessedResponse.name + " and type(s): "+ ProcessedResponse.typeList + ".";
            }
        });
    };
    render(){
        return (
            <div>
                <form onSubmit = {this.readId}>
                    <h1>Id</h1>
                    <input type="text" id="pokeId"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    };

}
export default IdSearch;