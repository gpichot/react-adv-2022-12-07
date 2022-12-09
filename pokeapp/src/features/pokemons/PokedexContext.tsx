import React from "react";

type PokemonId = number | string;

type PokedexContextType = {
  pokemons: PokemonId[];
  addPokemon: (pokemonId: PokemonId) => void;
  removePokemon: (pokemonId: PokemonId) => void;
};

export const PokedexContext = React.createContext<
  PokedexContextType | undefined
>(undefined);

export function PokedexProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = React.useState<PokemonId[]>([]);

  const addPokemon = (pokemonId: PokemonId) => {
    setPokemons((pokemons) => [...pokemons, pokemonId]);
  };

  const removePokemon = (pokemonId: PokemonId) => {
    setPokemons((pokemons) => pokemons.filter((id) => id !== pokemonId));
  };

  const contextValue = {
    pokemons,
    addPokemon,
    removePokemon,
  };

  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  );
}

export function usePokedex() {
  const context = React.useContext(PokedexContext);

  if (context === undefined) {
    throw new Error("usePokedex must be used within a PokedexProvider");
  }

  return context;
}
