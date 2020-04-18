import TypeSearch from '../components/TypeSearch';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "table": []
    };

  }

  setResultsTable = (processed) => {
    return(
      this.setState({"table": processed})
      )
  }

  createResultsTable() {

    return (
      <table className={styles.tableResponse}>
        <tbody>
          {
            this.state.table.map((entry, index) => {
              return(
                <tr key={index}>
                  <td>{entry.id}</td>
                  <td>{entry.name}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    )
  }


  render() {
    return (
      <div>
        <div>
              <Head>
                  <title>Type</title>
              </Head>
              <div className={styles.header}>
                  <p>
                      Click on the links below to filter your pokedex search!
                  </p>
                  <div className={styles.nav}>
                    <Link href = "/index"><a className={styles.link}>Home</a></Link>
                    <Link href = "/id"><a className={styles.link}>Id</a></Link>
                    <Link href = "/type"><a className={styles.link}>Type</a></Link>
                  </div>
              </div>
        </div>
        <div>
          <TypeSearch callback={this.setResultsTable} />
          {this.createResultsTable()}
        </div>
      </div>
    );
  }
  
}

export default App;
