const path = require("path");

module.exports = {
  entry: {
    reveal: "./src/index.js",
    css: "./src/css.js"
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "[name].js"
  },
  devServer: {
    port: 32768,
    devMiddleware: {
      publicPath: "/assets/"
    },
    static: {
      directory: path.resolve(__dirname, ".")
    }
  },
  module: {
    rules: [
      {
	test: /\.css$/,
	use: ["style-loader", "css-loader"]
      }
    ]
  }
}
