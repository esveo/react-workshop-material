const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

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
        options: {
          plugins: [
            process.env.NODE_ENV !== "production" && "react-refresh/babel",
          ],
        },
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
};

config.plugins = [];

config.plugins.push(
  new ModuleFederationPlugin({
    name: "Application Shell",
    // adds react as shared module
    // version is inferred from package.json
    // there is no version check for the required version
    // so it will always use the higher version found
    shared: {
      react: {
        import: "react", // the "react" package will be used a provided and fallback module
        shareKey: "react", // under this name the shared module will be placed in the share scope
        shareScope: "default", // share scope with this name will be used
        singleton: true, // only a single version of the shared module is allowed
        version: "0.0.0-experimental-7d06b80af",
        requiredVersion: "^0.0.0-experimental-7d06b80af",
        eager: true,
      },
      "react-dom": {
        singleton: true, // only a single version of the shared module is allowed
        version: "0.0.0-experimental-7d06b80af",
        requiredVersion: "^0.0.0-experimental-7d06b80af",
        eager: true,
      },
    },
  })
);

config.plugins.push(
  new CopyPlugin({
    patterns: [
      {
        from: "./src/topics/microfrontends/lib/live-chat/build",
        to: "runtime-modules/chat",
      },
    ],
  })
);

if (process.env.NODE_ENV !== "production") {
  config.plugins.push(new ReactRefreshPlugin());
}

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
