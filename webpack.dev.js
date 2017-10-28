const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  // devServer: {
  //   hot: true
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body"
    })
  ]
});
