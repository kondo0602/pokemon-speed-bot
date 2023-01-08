// @see: https://altema.jp/pokemonsv/syuzokuchi_list
import express from "express";
import * as line from "@line/bot-sdk";
const PORT = process.env.PORT || 3000;
require("dotenv").config();
import { Pokemon } from "./Pokemon";

const app = express();

const config: line.ClientConfig & line.MiddlewareConfig = {
  channelSecret: process.env.CHANNEL_SECRET as string,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
};
const client = new line.Client(config);

app.post(
  "/webhook",
  line.middleware(config),
  (req: express.Request, res: express.Response) => {
    console.log(req.body.events);

    Promise.all(req.body.events.map(handleEvent)).then((result) =>
      res.json(result)
    );
  }
);

const handleEvent = async (event: line.WebhookEvent) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  const targetPokemonName = convertHiraganaToKana(event.message.text).trim();

  const pokemon = findPokemonData(targetPokemonName);

  if (!pokemon) {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "まだSVに実装されていないポケモンのようです...。",
    });
  }

  const response = `すばやさ種族値: ${pokemon.s}
最速スカーフ: ${pokemon.maxSpeedWithScarf}
最速: ${pokemon.maxSpeed}
準速: ${pokemon.secondSpeed}
無振: ${pokemon.noAdjustment}
最遅: ${pokemon.minSpeed}`;

  return client.replyMessage(event.replyToken, {
    type: "text",
    text: response,
  });
};

app.listen(PORT);
console.log(`Server running at ${PORT}`);

const convertHiraganaToKana = (hiragana: string): string => {
  return hiragana.replace(/[ぁ-ん]/g, (s: string) => {
    return String.fromCharCode(s.charCodeAt(0) + 0x60);
  });
};

const findPokemonData = (pokemonName: string): Pokemon => {
  const json = require("./sv_pokemon_status.json");

  const pokemon = json.find((pokemon: Pokemon) => {
    if (pokemonName === pokemon.name) return pokemon;
  });

  return pokemon;
};
