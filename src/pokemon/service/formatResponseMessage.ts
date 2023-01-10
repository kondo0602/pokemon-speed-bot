import { Pokemon } from "../types/pokemon";

export const formatResponseMessage = (pokemonData: Pokemon[]): string => {
  let response = "";

  pokemonData.forEach((pokemon) => {
    if (response !== "") response += "\n\n";

    response += `すばやさ種族値: ${pokemon.s}\n------------------\n最速スカーフ: ${pokemon.maxSpeedWithScarf}\n最速: ${pokemon.maxSpeed}\n準速: ${pokemon.secondSpeed}\n無振: ${pokemon.noAdjustment}\n最遅: ${pokemon.minSpeed}`;
  });

  return response;
};
