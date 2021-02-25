import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import CardList from "./components/CardList/CardList.component";

import "./styles.css";

const App = () => {
  const [error, setError] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMonsters = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      res = await res.json();
      setMonsters(res);
      setFilteredMonsters(res);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      setFilteredMonsters(
        monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredMonsters(monsters);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    fetchMonsters();
  }, []);

  if (error) {
    return <div className="app">{error.message}</div>;
  }

  return (
    <div className="app">
      <Header />
      <SearchBox onChange={setSearchTerm} />
      <CardList allMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
