import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <input
          className="search -box"
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />

        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <p>{monster.name}</p>;
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
