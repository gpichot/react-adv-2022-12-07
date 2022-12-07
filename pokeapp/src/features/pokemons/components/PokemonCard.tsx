import React from "react";

import { PokemonDetail } from "../types";
import PokemonTypePill from "./PokemonTypePill";

import styles from "./PokemonCard.module.scss";

type PokemonCardProps = {
  pokemon: PokemonDetail;
};

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const [isHovered, setIsHovered] = React.useState(false);

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
        <h2 className={styles.pokemonCardName}>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{types}</p>
      </div>
      <div className={styles.pokemonCardActions}>
        <button className={styles.pokemonCardButton}>Details</button>
      </div>
    </div>
  );
}
