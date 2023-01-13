import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {
  response.send("Hello LINE BOT (Serverless)");
};
