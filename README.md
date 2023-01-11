# 【ポケモン SV】 すばやさ実数値 LINE BOT

<img src="https://img.shields.io/badge/-TypeScript-007ACC.svg?style=flat">

ポケットモンスター SV に実装済みのポケモンの名前を送信すると、そのポケモンの素早さの種族値と最速〜最遅の実数値を返す LINE BOT です（友達登録は[こちら](https://lin.ee/KzbcOMB)から）。

## 使用方法

1. ポケモンの名前を送信する
2. ポケモンのすばやさ種族値・実数値が返ってくる

![](https://user-images.githubusercontent.com/73473550/211728537-d56858e6-6072-41c4-b92d-2b5a01bb3321.gif)

## 仕様

■ 入力形式について
ひらがなとカタカナに対応します。
例）ヒトカゲ、りざーど

※ SV 未実装のポケモンについては対応していません
※ 略称・俗称には対応していません
※ 先頭・末尾の空白や改行はトリミングして読み取りますが文字と文字の間に空白が入っている場合、ポケモンの名前として認識できません

リージョンフォームや特性による種族値の変化があるポケモンの場合、そのポケモンの名前を入力いただければ複数の種族値をまとめて返信します。試しに「ロトム」と入力してみてください！

■ 要望や不具合について
「もっとこうだったらいいのに」「こういう入力をすると動かない！」などありましたら、お手数ですが作者 Twitter（https://twitter.com/kondo0602_t）にリプライ or DM にてご連絡いただけると大変助かります。

<!-- ユーザー向けREADMEなので開発者にしか伝わらない情報は書かない -->
<!-- ## 技術スタック

- LINE Messaging API
- TypeScript + Node.js + LINE Messaging API SDK + express
- Vercel

## アプリケーション構成

![](https://user-images.githubusercontent.com/73473550/211734686-f774fd8f-a739-4c71-8a79-e87d5da5fa9e.png)

1. ユーザーによって当 BOT から Messaging API にテキストメッセージが送信される
2. Messaging API に登録した express のエンドポイント に、Webhook イベントが送信される
3. Webhook イベントに応じて、サーバで処理（当リポジトリ内のコード）を行う
4. サーバの処理結果を Messaging API に返す
5. Message API から当 BOT にレスポンスメッセージが送信され、ユーザーがレスポンスメッセージを確認する -->
