import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import pokemons from "@/pokemons.json";

import { PokedexProvider } from "../PokedexContext";
import PokemonCard from "./PokemonCard";

function createPokemon(overrides = {}) {
  return {
    ...pokemons[0],
    ...overrides,
  };
}

function Wrapper({ children }) {
  return (
    <BrowserRouter>
      <PokedexProvider>{children}</PokedexProvider>
    </BrowserRouter>
  );
}

describe("PokemonCard", () => {
  it("displays name and types", () => {
    const pokemon = createPokemon({
      name: "bulbasaur",
      types: ["grass", "poison"],
    });
    render(<PokemonCard pokemon={pokemon} />, { wrapper: Wrapper });

    expect(screen.getByText("bulbasaur")).toBeVisible();
    expect(screen.getByText(/🌱 grass/i)).toBeVisible();
    expect(screen.getByText(/☠ poison/i)).toBeVisible();
  });
});
