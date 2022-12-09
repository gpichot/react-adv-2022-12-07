import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import InputControl from "@/components/InputControl";

import styles from "./PokemonForm.module.scss";

export default function PokemonForm() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (payload) => {
      const response = await fetch(
        "https://pokeapi.fly.dev/gpichot20221207/pokemons",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(["pokemons", { offset: 0 }]);
      },
    }
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const payload = {
      name,
      type,
      height: parseInt(height),
      weight: parseInt(weight),
    };

    mutation.mutate(payload);
  };

  const isDisabled = name === "" || type === "";

  const focusRef = React.useCallback((ref: HTMLInputElement | null) => {
    ref?.focus();
  }, []);

  return (
    <form className={styles.pokemonForm} onSubmit={handleSubmit}>
      <div className={styles.pokemonFormFields}>
        <InputControl
          ref={focusRef}
          required
          label="Name"
          name="name"
          value={name}
          placeholder="Pikachu"
          onChange={(event) => setName(event.target.value)}
        />
        <InputControl
          required
          label="Type"
          name="type"
          value={type}
          placeholder="electric"
          onChange={(event) => setType(event.target.value)}
        />
        <InputControl
          label="Height"
          name="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
        <InputControl
          label="Weight"
          name="weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </div>
      <button type="submit" disabled={isDisabled}>
        Create
      </button>
    </form>
  );
}
