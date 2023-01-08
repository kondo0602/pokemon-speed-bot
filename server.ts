// @see: https://altema.jp/pokemonsv/syuzokuchi_list
"use strict";

const express = require("express");
const line = require("@line/bot-sdk");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

const config = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
};

const app = express();

app.post("/webhook", line.middleware(config), (req, res) => {
  console.log(req.body.events);

  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

const client = new line.Client(config);

async function handleEvent(event) {
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
}

app.listen(PORT);
console.log(`Server running at ${PORT}`);

const convertHiraganaToKana = (hiragana) => {
  return hiragana.replace(/[ぁ-ん]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) + 0x60);
  });
};

const findPokemonData = (pokemonName) => {
  const json = require("./sv_pokemon_status.json");

  const pokemon = json.find((pokemon) => {
    if (pokemonName === pokemon.name) return pokemon;
  });

  return pokemon;
};
