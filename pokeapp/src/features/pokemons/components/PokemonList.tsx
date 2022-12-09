import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  fetchPokemonList,
  PokemonKeys,
  usePokemonListQuery,
} from "../query-hooks";
import { PokemonType } from "../types";
import PokemonCard from "./PokemonCard";
import PokemonForm from "./PokemonForm";

const MemoizedPokemonCard = React.memo(PokemonCard);

export default function PokemonList() {
  const [page, setPage] = React.useState(1);
  const pokemonListQuery = usePokemonListQuery(page);
  const queryClient = useQueryClient();

  React.useEffect(() => {
    queryClient.prefetchQuery(PokemonKeys.pokemonList(page + 1), () =>
      fetchPokemonList(page + 1)
    );
  }, [page, queryClient]);

  if (pokemonListQuery.isLoading) return "Chargement en cours";
  if (pokemonListQuery.isError) return "Erreur";

  const { data: pokemonList } = pokemonListQuery;

  React.useEffect(() => {
    alert("Pokemons changed!");
  }, [pokemonList]);

  return (
    <>
      <div
        className="navigation"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Précédent
        </button>
        {pokemonListQuery.isFetching ? "Fetching" : "-"}
        <button
          disabled={page === pokemonList?.count}
          onClick={() => setPage((page) => page + 1)}
        >
          Suivant
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
          gridGap: "1rem",
          padding: "1rem",
        }}
      >
        {pokemonList.results.map((pokemon) => (
          <MemoizedPokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
