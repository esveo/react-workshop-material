const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const topicBase = path.join(__dirname, "./src/topics");
const topicDirectoryNames = fs.readdirSync(topicBase);

const topicApps = topicDirectoryNames.map((name) => ({
  name,
  baseUrl: `/${name}`,
  entry: path.join(topicBase, name, "index.tsx"),
  html: path.join(topicBase, name, "index.html"),
}));

const apps = [
  {
    name: "index",
    baseUrl: "/",
    entry: "./src/app/index.tsx",
    html: "./src/app/index.html",
  },
  ...topicApps,
];

const entries = {};
for (const app of apps) {
  entries[app.name] = app.entry;
}

const config = {};

config.devtool = "eval-source-map";

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
