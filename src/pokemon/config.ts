import * as line from "@line/bot-sdk";
import * as dotenv from "dotenv";
dotenv.config();

export const config: line.ClientConfig & line.MiddlewareConfig = {
  channelSecret: process.env.CHANNEL_SECRET as string,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
} as const;
