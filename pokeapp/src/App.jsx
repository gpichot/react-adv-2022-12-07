import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

import { PokemonList } from "./features/pokemons";
import PokemonForm from "./features/pokemons/components/PokemonForm";
import { usePokedex } from "./features/pokemons/PokedexContext";

import "./globals.scss";

function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Link to="/">Homepage</Link>
      <Link to="/pokemons/new">Create a new pokemon</Link>
    </div>
  );
}

function PokemonDetails() {
  const params = useParams();

  return <>Details Pokemon {params.id}</>;
}

function App() {
  const { pokemons } = usePokedex();

  return (
    <div>
      <h1>Poke App</h1>
      <p>You have {pokemons.length} pokemons</p>
      <Navigation />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemons/new" element={<PokemonForm />} />
        <Route path="/pokemons/:id" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
