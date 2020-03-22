class NameSearch extends React.Component {

    NameSearchFormSubmit = () => {

        // Get the input's value
        let nameSearch = document.querySelector('#nameSearch').value;

        // Look for pokemon based on the id
        fetch("http://localhost:3000/api/pokemon/name/" + nameSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            console.log(processed);
            // Call the callback function given to the class component
            //this.props.callback(processed);
            let reporting = document.querySelector("#reportingArea");

            if(processed.error){
                reporting.innerHTML = "Sorry, that doesn't exist. We returned: " + processed.error;
            } else{
                reporting.innerHTML = "The pokemon with that name has a Pokedex # of: " + processed.id + " and type(s): "+ processed.typeList + ".";
            }
        });

    }

    render() {
        return(
            <div>
                <h2>Search for Pokemon by their Name:</h2>
                <input 
                    type="text" 
                    id="nameSearch" 
                />
                <button onClick={this.NameSearchFormSubmit}>Search by Name</button>

            </div>
        );
    }

}

export default NameSearch;