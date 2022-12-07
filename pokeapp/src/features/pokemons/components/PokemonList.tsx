import React from "react";

import { useFetchResource } from "@/hooks";

import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const {
    data: pokemonsData,
    isLoading,
    error,
  } = useFetchResource("https://pokeapi.fly.dev/gpichot20221207/pokemons");

  if (isLoading) return "Chargement en cours";
  if (error) return "Erreur";

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
          gridGap: "1rem",
          padding: "1rem",
        }}
      >
        {pokemonsData.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
