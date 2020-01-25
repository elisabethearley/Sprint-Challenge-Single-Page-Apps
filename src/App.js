import React, { useState, useEffect } from "react";
//import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";


export default function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  
  return (
    <main>
      <Header />
    </main>
  );
}
