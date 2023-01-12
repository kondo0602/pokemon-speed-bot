"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const line = __importStar(require("@line/bot-sdk"));
const config_1 = require("../pokemon/config");
const index_1 = require("../pokemon/index");
exports.router = express_1.default.Router();
exports.router.get("/", (req, res) => process.env.NODE_ENV === "PRODUCTION"
    ? res.send("Hello LINE BOT")
    : res.send("Hello LINE BOT (DEV)"));
exports.router.post("/webhook", line.middleware(config_1.config), (req, res) => {
    // console.log(req.body.events);
    Promise.all(req.body.events.map(index_1.handleEvent))
        .then((result) => res.json(result))
        .catch((error) => {
        console.log(error);
    });
});
