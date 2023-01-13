import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleEvent } from "../../src/pokemon/handler";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
    });
}
