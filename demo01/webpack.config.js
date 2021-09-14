const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin")
const path = require("path");

const config = {
  mode: "development",
  // devtool主要用于调试，不同的设置会导致----调试越难，打包越快 或者 调试容易，打包慢
  devtool: "cheap-module-source-map",
  entry: {
    index: "./src/js/index.js",
    slider: "./src/js/slider.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
            limit: 20480, // 比它小的就会被解析成base64，大的会直接是图片
          },
        },
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    host: 'localhost',
    port: 3300
  }
};

module.exports = config;
