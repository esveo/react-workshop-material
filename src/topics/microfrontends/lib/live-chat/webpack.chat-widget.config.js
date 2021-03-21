const path = require("path");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

const entries = [path.resolve(__dirname, "ChatWidget.tsx")];

const config = {};

config.devtool = "eval-source-map";

config.entry = entries;

config.output = {
  filename: "[name].js",
  path: path.resolve(__dirname, "build"),
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
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
};

config.plugins = [
  new ModuleFederationPlugin({
    name: "Realtime Chat Widget",
    library: { type: "var", name: "chat_widget" },
    filename: "chat-widget.js",
    exposes: {
      "./ChatWidget": path.resolve(__dirname, "./ChatWidget"),
    },

    shared: {
      react: {
        import: "react", // the "react" package will be used a provided and fallback module
        shareKey: "react", // under this name the shared module will be placed in the share scope
        shareScope: "default", // share scope with this name will be used
        singleton: true, // only a single version of the shared module is allowed
        requiredVersion: "^0.0.0-experimental-7d06b80af",
      },
      "react-dom": {
        singleton: true, // only a single version of the shared module is allowed
        requiredVersion: "^0.0.0-experimental-7d06b80af",
      },
    },
  }),
];

config.target = "web";

config.devServer = {
  port: 3000,
  hot: true,
};

module.exports = config;
