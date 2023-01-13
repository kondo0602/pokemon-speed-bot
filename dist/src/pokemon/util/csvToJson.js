"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csvtojson_1 = __importDefault(require("csvtojson"));
const csvToJson = () => {
    const INPUT_CSV_PATH = "../service/pokemon_status.csv";
    const OUTPUT_JSON_PATH = "../service/pokemon_status.json";
    (0, csvtojson_1.default)()
        .fromFile(INPUT_CSV_PATH)
        .then((jsonObj) => {
        fs_1.default.writeFile(OUTPUT_JSON_PATH, JSON.stringify(jsonObj), "utf8", (error) => {
            if (error) {
                console.log(JSON.stringify(error));
            }
        });
        console.log("Success.");
    });
};
csvToJson();
