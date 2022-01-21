import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import TableRow from './components/TableRow.js';

class App extends Component {

  constructor(props){
    super();

    this.state = {
      info : [
        { "id" : 1,
          "name" :"Paco",
          "age" : "22"
        },
        { "id" : 2,
          "name" :"Jose",
          "age" : "32"
        },
        { "id" : 3,
          "name" :"Josete",
          "age" : "42"
        },
        { "id" : 4,
          "name" :"Franciscos",
          "age" : "52"
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <Header />
        <table border="1">
          <tbody>
          {this.state.info.map((person, i) => <TableRow key={i} data={person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;