import * as line from "@line/bot-sdk";
import { convertHiraganaToKana } from "./util/convertHiraganaToKana";
import { config } from "./config";
import { findPokemonData } from "./service/findPokemonData";
import { formatResponseMessage } from "./service/formatResponseMessage";

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
