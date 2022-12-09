import React from "react";

import { usePokedex } from "../PokedexContext";
import { PokemonDetail } from "../types";
import PokemonTypePill from "./PokemonTypePill";

import styles from "./PokemonCard.module.scss";
import { Link } from "react-router-dom";

type PokemonCardProps = {
  pokemon: PokemonDetail;
};

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const [isHovered, setIsHovered] = React.useState(false);
  const { addPokemon, removePokemon, pokemons } = usePokedex();

  const isCaptured = pokemons.includes(pokemon.id);

  const handleCapture = () => {
    if (isCaptured) {
      removePokemon(pokemon.id);
    } else {
      addPokemon(pokemon.id);
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const types = pokemon.types.map((type) => (
    <PokemonTypePill key={type} type={type} />
  ));

  return (
    <div
      className={styles.pokemonCard}
      style={{ backgroundColor: isHovered ? "#ffffff44" : "" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.pokemonContent}>
        {isCaptured ? <p>Captured!</p> : <p>Capture me please!</p>}

        <h2 className={styles.pokemonCardName}>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{types}</p>
      </div>
      <div className={styles.pokemonCardActions}>
        <button onClick={handleCapture}>
          {isCaptured ? "Release" : "Capture"}
        </button>
        <Link
          to={`/pokemons/${pokemon.id}`}
          className={styles.pokemonCardButton}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
