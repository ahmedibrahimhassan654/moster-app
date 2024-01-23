import { Component } from "react";

import "./App.css";
import CardListComp from "./components/cardList/cardListComp";

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
    const searchedString = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchedString };
    });
  };
  render() {
    const { monsters, searchedString } = this.state;
    const { onsearchCahnge } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchedString);
    });

    return (
      <>
        <div className="App">
          <input
            className="search-box"
            type="search"
            placeholder="search monsters"
            onChange={onsearchCahnge}
          />
          {/* 
          {filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <p>{monster.name}</p>;
              </div>
            );
          })}
          */}
          <CardListComp monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
