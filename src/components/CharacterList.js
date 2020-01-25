import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array! 
    const CharacterData = () => {   
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    }
    CharacterData();
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <div>
        {characters.map(character => {
            return 
              <CharacterCard key={character.name} character={character} />
          })}
      </div>
    </section>
  );
}
