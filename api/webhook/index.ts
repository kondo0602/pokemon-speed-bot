import { NextApiRequest, NextApiResponse } from "next";
import { handleEvent } from "@/pokemon";
import * as line from "@line/bot-sdk";
import { middlewareConfig } from "@/lib/line/config";

// @see: https://nextjs-ja-translation-docs.vercel.app/docs/api-routes/api-middlewares
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, line.middleware(middlewareConfig));

  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
    });
}
