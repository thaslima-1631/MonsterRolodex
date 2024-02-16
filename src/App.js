import React, { useState, useEffect } from "react";
import "./App.css";

import MonsterCard from "./components/card-list/MonsterCard";
import SearchBox from "./components/card-list/SearchBox";
function App() {
  //Functional Component
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");

  const filteredList = monsters.filter((monster) => {
    return monster.name
      .toLowerCase()
      .includes(searchString.toLocaleLowerCase());
  });
  useEffect(() => {
    // This function will be called after the component is mounted       //This is a hook     |

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  //[] contains dependency or props this useEffect is called the frst time when component is mounted and then its called when the dependency or props changes

  return (
    <div className="App">
      <SearchBox setSearchString={setSearchString} />
      <div className="row">
        <MonsterCard details={filteredList} />
      </div>
    </div>
  );
}

export default App;
