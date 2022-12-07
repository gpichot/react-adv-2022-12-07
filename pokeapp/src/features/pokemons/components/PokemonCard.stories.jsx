import pokemons from "@/pokemons.json";

import PokemonCard from "./PokemonCard";

export default {
  title: "Pokemons/PokemonCard",
  component: PokemonCard,
};

const Template = (args) => <PokemonCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemon: pokemons[0],
};

export const Ivysaur = Template.bind({});
Ivysaur.args = {
  pokemon: pokemons[1],
};
