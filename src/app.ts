import express from "express";
import { router } from "@/routes";

export const app = express();
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port);
