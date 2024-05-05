const path = require("path");

module.exports = {
  entry: "./src/main.js", // the entry point of your application
  output: {
    filename: "bundle.js", // the name of the bundled output file
    path: path.resolve(__dirname, "dist"), // the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // use the babel-loader for all .js files
        exclude: /node_modules/, // except those in the node_modules directory
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // use the @babel/preset-env preset
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      three: path.resolve(
        __dirname,
        "node_modules/three/build/three.module.js"
      ),
      "cannon-es": path.resolve(
        __dirname,
        "node_modules/cannon-es/dist/cannon-es.js"
      ),
    },
  },
};
