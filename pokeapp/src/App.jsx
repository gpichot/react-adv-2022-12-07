import { PokemonList } from "./features/pokemons";
import PokemonForm from "./features/pokemons/components/PokemonForm";

import "./globals.scss";

function App() {
  return (
    <div>
      <h1>Pokemons</h1>
      <PokemonForm />
      <PokemonList />
    </div>
  );
}

export default App;
