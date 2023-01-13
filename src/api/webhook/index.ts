// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import { handleEvent } from "../../src/pokemon/handler";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   // TODO: line.middlewareで行っているアクセストークンの検証を行う

//   Promise.all(req.body.events.map(handleEvent))
//     .then((result) => res.json(result))
//     .catch((error) => {
//       console.log(error);
//     });
// }

// import { VercelRequest, VercelResponse } from "@vercel/node";
import { NextApiRequest, NextApiResponse } from "next";
import { handleEvent } from "../../pokemon";
import * as line from "@line/bot-sdk";
// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import { handleEvent } from "../../src/pokemon/handler";
import * as dotenv from "dotenv";

dotenv.config();

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

export const middlewareConfig: line.MiddlewareConfig = {
  channelSecret: process.env.CHANNEL_SECRET as string,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
};

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
