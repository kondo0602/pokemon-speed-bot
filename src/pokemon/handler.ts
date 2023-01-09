// @see: https://altema.jp/pokemonsv/syuzokuchi_list
import * as line from "@line/bot-sdk";
import { Pokemon } from "./types/pokemon";
import { config } from "./config";

const client = new line.Client(config);

export const handleEvent = async (event: line.WebhookEvent) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  const targetPokemonName = convertHiraganaToKana(event.message.text).trim();

  const pokemon = findPokemonData(targetPokemonName);

  const responseMessage = pokemon
    ? formatResponseMessage(pokemon)
    : "SV未実装のポケモンです...";

  return client.replyMessage(event.replyToken, {
    type: "text",
    text: responseMessage,
  });
};

const convertHiraganaToKana = (hiragana: string): string => {
  return hiragana.replace(/[ぁ-ん]/g, (s: string) => {
    return String.fromCharCode(s.charCodeAt(0) + 0x60);
  });
};

const findPokemonData = (pokemonName: string): Pokemon => {
  const json = require("./pokemon_status.json");

  const pokemon = json.find((pokemon: Pokemon) => {
    if (pokemonName === pokemon.name) return pokemon;
  });

  return pokemon;
};

const formatResponseMessage = (pokemon: Pokemon): string => {
  return `すばやさ種族値: ${pokemon.s}\n------------------\n最速スカーフ: ${pokemon.maxSpeedWithScarf}\n最速: ${pokemon.maxSpeed}\n準速: ${pokemon.secondSpeed}\n無振: ${pokemon.noAdjustment}\n最遅: ${pokemon.minSpeed}`;
};
