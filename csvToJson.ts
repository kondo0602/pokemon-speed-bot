import fs from "fs";
import csv from "csvtojson";

const csvToJson = () => {
  const INPUT_CSV_PATH = "./sv_pokemon_status.csv";
  const OUTPUT_JSON_PATH = "./sv_pokemon_status.json";

  csv()
    .fromFile(INPUT_CSV_PATH)
    .then((jsonObj) => {
      fs.writeFile(
        OUTPUT_JSON_PATH,
        JSON.stringify(jsonObj),
        "utf8",
        (error) => {
          if (error) {
            console.log(JSON.stringify(error));
          }
        }
      );
    });
};

csvToJson();
