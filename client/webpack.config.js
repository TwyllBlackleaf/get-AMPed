const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack")
const path = require("path");

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.join(__dirname + "/build"),
    filename: "main.bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  new BundleAnalyzerPlugin({
      analyzerMode: "static", 
  })
  ],
  mode: "development"
};