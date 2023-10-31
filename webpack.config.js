/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

const envFilePath = ".env";
require("dotenv").config({ path: envFilePath });

const { NODE_ENV } = process.env;

const output = {
  filename: "[name].js",
  path: path.join(__dirname, "/dist"),
  publicPath: "",
};

const setFileLoaderOptions = fileCategory => ({
  name: resourcePath => {
    if (resourcePath.includes("fonts") || resourcePath.includes("videos")) {
      return "[name].[ext]";
    }
    return "[contenthash].[ext]";
  },
  publicPath: filename => `${output.publicPath}${fileCategory}/${filename}`,
  outputPath: url => path.join(fileCategory, url),
});

const config = {
  name: "build",
  mode: NODE_ENV,
  devtool: isDev ? "source-map" : "hidden-source-map",
  entry: {
    app: ["./src/index.tsx"],
  },
  output,
  resolve: {
    modules: ["node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(webp|jpg|png|jpeg)$/,
        loader: "file-loader",
        options: {
          ...setFileLoaderOptions("images"),
          limit: 5000,
        },
      },
      {
        test: /\.svg$/,
        use: { loader: "@svgr/webpack", options: { svgo: false, svgProps: { display: "flex" } } },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: envFilePath,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: true,
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    open: true,
    historyApiFallback: true,
  },
};

if (isDev && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = config;
