import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { body } = req;
  return res.send(`Hello ${body}, you just parsed the request body!`);
}
