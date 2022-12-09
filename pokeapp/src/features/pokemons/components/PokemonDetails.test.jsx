import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import pokemons from "@/pokemons.json";

import { usePokemonDetailsQuery } from "../query-hooks";
import PokemonDetails from "./PokemonDetails";

jest.mock("react-router-dom");
jest.mock("../query-hooks");

function Wrapper({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

describe("PokemonDetails", () => {
  it("should render pokemon name", () => {
    useParams.mockReturnValue({ id: "1" });
    usePokemonDetailsQuery.mockReturnValue({
      isLoading: false,
      data: pokemons[0],
    });
    render(<PokemonDetails />, { wrapper: Wrapper });

    expect(screen.getByText("bulbasaur")).toBeVisible();
  });

  it("should render error case", () => {
    useParams.mockReturnValue({ id: "1" });
    usePokemonDetailsQuery.mockReturnValue({
      isLoading: false,
      isError: true,
      refetch: jest.fn(),
    });
    render(<PokemonDetails />, { wrapper: Wrapper });

    expect(screen.getByText("Error")).toBeVisible();
    expect(screen.getByText("Retry")).toBeVisible();
  });
});
