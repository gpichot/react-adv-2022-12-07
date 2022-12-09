import { useQuery } from "@tanstack/react-query";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 3000));

export function usePokemonDetailsQuery(id) {
  return useQuery(["pokemon", id], async () => {
    await sleep();
    const res = await fetch(
      `https://pokeapi.fly.dev/gpichot20221207/pokemons/${id}`
    );

    return res.json();
  });
}

export const PokemonKeys = {
  pokemonList: (page) => ["pokemons", page],
};

export async function fetchPokemonList(page) {
  const limit = 10;
  const offset = (page - 1) * limit;
  await sleep();
  const res = await fetch(
    `https://pokeapi.fly.dev/gpichot20221207/pokemons?offset=${offset}&limit=${limit}`
  );

  return res.json();
}

export function usePokemonListQuery(page) {
  return useQuery(PokemonKeys.pokemonList(page), () => fetchPokemonList(page), {
    keepPreviousData: true,
  });
}
