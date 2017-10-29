const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const BUILD = path.join(__dirname, "build");
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;
const PROXY = `https://${HOST}:${PORT}`;

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    stats: "errors-only",
    https: true,

    host: HOST,
    port: PORT
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: HOST,
        port: PORT,
        proxy: PROXY,
        https: true
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ]
});
