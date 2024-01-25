import { useState, useEffect } from "react";

import "./App.css";
import CardListComp from "./components/cardList/cardListComp";
import SearchBoxComp from "./components/searchComp/searchBoxComp";

const App = () => {
  const [searchedString, setsearchedString] = useState("");
  const [monsters, setmonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setmonsters(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchedString);
    });
    setFilteredMonsters(newfilteredMonsters);
    console.log("side effect ");
  }, [monsters, searchedString]);

  const onsearchCahnge = (e) => {
    const searchedStringField = e.target.value.toLocaleLowerCase();
    setsearchedString(searchedStringField);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters rolodex </h1>

      <SearchBoxComp onsearch={onsearchCahnge} placeholder="search monster " />

      <CardListComp monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchedString: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState({ monsters: users });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   onsearchCahnge = (e) => {
//     const searchedString = e.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchedString };
//     });
//   };
//   render() {
//     const { monsters, searchedString } = this.state;
//     const { onsearchCahnge } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchedString);
//     });

//     return (
//       <>
//         <div className="App">
//           <h1 className="app-title"> Monsters rolodex </h1>
//           {/*
//           <input
//             className="search-box"
//             type="search"
//             placeholder="search monsters"
//             onChange={onsearchCahnge}
//           />
//             */}
//           <SearchBoxComp onsearch={onsearchCahnge} />
//           {/*
//           {filteredMonsters.map((monster) => {
//             return (
//               <div key={monster.id}>
//                 <p>{monster.name}</p>;
//               </div>
//             );
//           })}
//           */}
//           <CardListComp monsters={filteredMonsters} />
//         </div>
//       </>
//     );
//   }
// }

export default App;
