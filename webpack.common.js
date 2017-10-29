const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const postcssCssnext = require("postcss-cssnext");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
          outputPath: "images/"
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["dist"])]
};
