const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const apps = [
  {
    name: "index",
    baseUrl: "/",
    entry: "./src/app/index.tsx",
    html: "./src/app/index.html",
  },
  {
    name: "use-effect--use-memo--use-callback",
    baseUrl: "/use-effect--use-memo--use-callback",
    entry: "./src/topics/use-effect--use-memo--and--use-callback/index.tsx",
    html: "./src/topics/use-effect--use-memo--and--use-callback/index.html",
  },
];

const entries = {};
for (const app of apps) {
  entries[app.name] = app.entry;
}

const config = {};

config.entry = entries;

config.output = {
  filename: "[name].js",
  path: path.resolve(__dirname, "dist"),
  chunkFilename: "[name].[chunkhash].js",
};

config.resolve = {
  extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
};

config.module = {
  rules: [
    {
      test: /\.(jsx?|tsx?)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: { plugins: ["react-refresh/babel"] },
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
};

config.plugins = [];

config.plugins.push(new ReactRefreshPlugin());

config.target = "web";

for (const app of apps) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${app.name}.html`,
      template: app.html,
      title: app.name,
      chunks: [app.name],
    })
  );
}

config.devServer = {
  port: 3000,
  hot: true,
};

module.exports = config;
