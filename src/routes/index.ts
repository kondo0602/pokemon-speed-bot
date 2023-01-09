import express from "express";
export const router = express.Router();

import * as line from "@line/bot-sdk";
import { config } from "@/pokemon/config";
import { handleEvent } from "@/pokemon/index";

router.post(
  "/webhook",
  line.middleware(config),
  (req: express.Request, res: express.Response) => {
    console.log(req.body.events);

    Promise.all(req.body.events.map(handleEvent)).then((result) =>
      res.json(result)
    );
  }
);
