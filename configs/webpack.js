const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfigs = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const TsconfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
const { cwd } = require("node:process");
const { resolve } = require("node:path");

const devConfigs = {
  mode: process.env.MODE,
  entry: "./src/index.tsx",
  output: {
    publicPath: process.env.PUBLIC_URL,
  },
  resolve: {
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: resolve(cwd(), "./tsconfig.json"),
      }),
    ],
  },
  devServer: {
    port: process.env.PORT,
    historyApiFallback: {
      index: "/index.html",
    },
    open: true,
    liveReload: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "author",
      filename: "remoteEntry.js",
      exposes: {
        "./Module": "./src/bootstrap.tsx",
      },
      remotes: {
        platform: process.env.LMS_PLATFORM_APP_REMOTE_PATH,
      },
      shared: {
        ...packageJson.dependencies,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfigs, devConfigs);
