// @see: https://altema.jp/pokemonsv/syuzokuchi_list
import { Pokemon } from "../types/pokemon";
import json from "../json/pokemon_status.json";

export const findPokemonData = (pokemonName: string): Pokemon[] => {
  return json.filter((pokemonData) => pokemonName === pokemonData.name);
};
