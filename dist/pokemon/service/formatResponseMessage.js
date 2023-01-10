"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponseMessage = void 0;
const formatResponseMessage = (pokemonData) => {
    let response = "";
    pokemonData.forEach((pokemon) => {
        if (response !== "")
            response += "\n\n";
        response += `すばやさ種族値: ${pokemon.s}\n------------------\n最速スカーフ: ${pokemon.maxSpeedWithScarf}\n最速: ${pokemon.maxSpeed}\n準速: ${pokemon.secondSpeed}\n無振: ${pokemon.noAdjustment}\n最遅: ${pokemon.minSpeed}`;
    });
    return response;
};
exports.formatResponseMessage = formatResponseMessage;
