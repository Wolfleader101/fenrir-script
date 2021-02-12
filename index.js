const fs = require("fs");
const path = require("path");
const CommandHandler = require("./utils/CommandHandler");
const inputDir = "./input/";

const Init = (inputDir) => {
  let inputFiles = fs.readdirSync(inputDir);
  inputFiles.forEach((file) => {
    if (path.extname(file) == ".fen") {
      ExecuteScript(inputDir, file);
    }
  });
};

const ExecuteScript = (inputDir, file) => {
  const data = fs.readFileSync(`${inputDir}${file}`, "utf-8");
  CommandHandler(data);
};

Init(inputDir);
