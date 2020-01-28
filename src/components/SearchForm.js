import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

export default function SearchForm() {
  
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      const char = response.data.results.filter(ch =>
        ch.name.toLowerCase().includes(query.toLowerCase())
        );

        setData(char);
    });
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
      <form> 
        <input id="name" type="text" name="textfield" placeholder="Search"
          value={query} onChange={handleChange} /> 
        <Link to="/"><button>Welcome</button></Link>
      </form>
      {data.map((ch => {
        return (
          <CharacterCard key={ch.id} name={ch.name} species={ch.species} status={ch.status} />
        )
      }))}
    </section>
  );
}
