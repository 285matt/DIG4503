import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "result": []
    };

  }

  setDisplayValue = (processed) => {
    return(
      this.setState({"result": processed})
      )
  }

  createDisplay() {

    return (
      <div>
        <h3>Pokemon:</h3>
        <p>{this.state.result}</p>
      </div>
    );

  }


  render() {
    return (
      <div>
        <IdSearch />
        <NameSearch />
        <h2> Reporting</h2>
        <div id="reportingArea"></div>
        {/* {this.createDisplay()} */}
      </div>
    );
  }
  
}

export default App;
