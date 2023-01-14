import { NextApiRequest, NextApiResponse } from "next";
import * as line from "@line/bot-sdk";
import { middlewareConfig } from "../../src/lib/line/config";
import { handleEvent } from "../../src/pokemon";

// @see: https://nextjs-ja-translation-docs.vercel.app/docs/api-routes/api-middlewares
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  middleware: any
) {
  return new Promise((resolve, reject) => {
    middleware(req, res, (result: any) => {
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
