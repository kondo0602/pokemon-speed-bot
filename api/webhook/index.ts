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
import { handleEvent } from "../../src/pokemon";
// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import { handleEvent } from "../../src/pokemon/handler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO: line.middlewareで行っているアクセストークンの検証を行う

  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
    });
}
