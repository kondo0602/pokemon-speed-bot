import express from "express";

import * as line from "@line/bot-sdk";
import { config } from "@/pokemon/config";
import { handleEvent } from "@/pokemon/index";

export const router = express.Router();

// router.get("/", (req: express.Request, res: express.Response) =>
//   process.env.NODE_ENV === "PRODUCTION"
//     ? res.send("Hello LINE BOT")
//     : res.send("Hello LINE BOT (DEV)")
// );

router.post(
  "/webhook",
  line.middleware(config),
  (req: express.Request, res: express.Response) => {
    // console.log(req.body.events);

    Promise.all(req.body.events.map(handleEvent))
      .then((result) => res.json(result))
      .catch((error) => {
        console.log(error);
      });
  }
);
