const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/TextArt.mjs",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "TextArt.js",
    globalObject: "this",
    library: {
      name: "anbani-textart",
      type: "umd",
      export: "default",
      umdNamedDefine: true,
    }
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};