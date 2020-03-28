import styles from '../Styles.module.css'

class TypeSearch extends React.Component {

    TypeSearchFormSubmit = () => {

        // Get the input's value
        let typeSearch = document.querySelector('#typeSearch').value;

        // Look for pokemon based on the id
        fetch("/api/pokemon/type/" + typeSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            //console.log(processed);
            //Call the callback function given to the class component
            this.props.callback(processed);
            // let reporting = document.querySelector("#reportingArea");

            // if(processed.error){
            //     reporting.innerHTML = "Sorry, that doesn't exist. We returned: " + processed.error;
            // } else{
            //     reporting.innerHTML = "Here are the Pokemon with that type: " + processed;
            // }
        });

    }

    render() {
        return(
            <div className={styles.input}>
                <h2>Search for Pokemon by their Type:</h2>
                <input 
                    type="text" 
                    id="typeSearch" 
                />
                <button onClick={this.TypeSearchFormSubmit}>Search by Type</button>

            </div>
        );
    }

}

export default TypeSearch;