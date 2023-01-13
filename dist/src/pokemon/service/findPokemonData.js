"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPokemonData = void 0;
const pokemon_status_json_1 = __importDefault(require("./pokemon_status.json"));
const findPokemonData = (pokemonName) => {
    return pokemon_status_json_1.default.filter((pokemonData) => pokemonName === pokemonData.name);
};
exports.findPokemonData = findPokemonData;
