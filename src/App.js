import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchedString: "",
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

  onsearchCahnge = (e) => {
    console.log("event.target.value", e.target.value);
    console.log({ startingArray: this.state.monsters });
    const searchedString = e.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchedString };
      },
      () => {
        console.log({ endingArray: this.state.monsters });
      }
    );
  };
  render() {
    console.log("start rendering ");
    const { monsters, searchedString } = this.state;
    const { onsearchCahnge } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchedString);
    });
    console.log("render", filteredMonsters);
    return (
      <div className="App">
        <input
          className="search -box"
          type="search"
          placeholder="search monsters"
          onChange={onsearchCahnge}
        />

        {filteredMonsters.map((monster) => {
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
