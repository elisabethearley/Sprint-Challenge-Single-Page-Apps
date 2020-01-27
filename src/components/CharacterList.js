import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array! 
    //const CharacterData = () => {   
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    //}
    //CharacterData();
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Link to="/"><button>Welcome</button></Link>
      <Link to="/Search"><button>Search</button></Link>
        {characters.map(character => (
              <CharacterCard key={character.id} name={character.name} 
              status={character.status} species={character.species} />
        ))}
    </section>
  );
}
