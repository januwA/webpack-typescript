import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  mode: "production",
  entry: path.resolve(__dirname, "../src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "../", "tsconfig.json"),
          },
        },
      },
    ],
  },
};

export default config;
