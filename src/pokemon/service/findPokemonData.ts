// @see: https://altema.jp/pokemonsv/syuzokuchi_list
import { Pokemon } from "../types/pokemon";
import json from "./pokemon_status.json";

export const findPokemonData = (pokemonName: string): Pokemon | null => {
  const pokemon = json.find((pokemon: Pokemon) => {
    if (pokemonName === pokemon.name) return pokemon;
  });

  return pokemon ?? null;
};
