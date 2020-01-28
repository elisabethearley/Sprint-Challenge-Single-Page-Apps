import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js"
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Characters" component={CharacterList} />
      <Route exact path="/Search" component={SearchForm} />
    </main>
  );
}
