// @see: https://altema.jp/pokemonsv/syuzokuchi_list
import json from "../json/pokemon_status.json";
import { Pokemon } from "../types/pokemon";

export const findPokemonData = (pokemonName: string): Pokemon[] => {
  return json.filter((pokemonData) => pokemonName === pokemonData.name);
};
