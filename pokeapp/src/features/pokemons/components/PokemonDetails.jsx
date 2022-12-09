import { useParams } from "react-router-dom";

import { usePokemonDetailsQuery } from "../query-hooks";

export default function PokemonDetails() {
  const params = useParams();
  const id = params.id;

  const pokemonQuery = usePokemonDetailsQuery(id);

  if (pokemonQuery.isLoading) return <p>Loading pokemon</p>;
  if (pokemonQuery.isError)
    return (
      <p>
        Error
        <button onClick={() => pokemonQuery.refetch()}>Retry</button>
      </p>
    );

  const { data: pokemon } = pokemonQuery;

  return (
    <>
      <h1>
        {pokemon.name} {pokemonQuery.isFetching && "(fetching)"}
      </h1>
      <p>{pokemon.types.join(", ")}</p>
      Details Pokemon {params.id}
    </>
  );
}
