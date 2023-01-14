import * as line from "@line/bot-sdk";
import { clientConfig } from "../lib/line/config";
import { convertHiraganaToKana } from "../util/convertHiraganaToKana";
import { findPokemonData } from "./service/findPokemonData";
import { formatResponseMessage } from "./service/formatResponseMessage";

const client = new line.Client(clientConfig);

export const handleEvent = async (event: line.WebhookEvent) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  const targetPokemonName = convertHiraganaToKana(event.message.text).trim();

  const pokemonData = findPokemonData(targetPokemonName);

  const responseMessage =
    pokemonData.length !== 0
      ? formatResponseMessage(pokemonData)
      : "SV未実装のポケモンです...";

  return client.replyMessage(event.replyToken, {
    type: "text",
    text: responseMessage,
  });
};
