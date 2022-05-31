const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

// require("dotenv").config();

const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

const pathsPlugin = new TsconfigPathsPlugin({
  configFile: "./tsconfig.json",
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  hash: true,
  template: path.resolve(__dirname, "./public/index.html"),
  favicon: path.resolve(__dirname, "./public/favicon.ico"),
  manifest: path.resolve(__dirname, "./public/manifest.json"),
});

let config = {};

module.exports = (env, argv) => {
  console.log("env:", env);
  config = {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[name].[chunkhash].js",
      filename: "[name].[chunkhash].js",
      libraryTarget: "umd",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            configFile: path.resolve("./babel.config.js"),
          },
          test: /\.(jsx?|tsx?)$/,
        },
        {
          //cho trường hợp import image
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
          options: {
            name: "./statics/images/[name].[ext]",
          },
        },

        //start thì thành style trên header, build sẽ dùng options
        {
          test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          loader: "file-loader",
          options: {
            name: "./statics/icon/[name].[ext]",
          },
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            //dùng thẻ style
            // {
            //     loader: "style-loader"
            // },

            //dùng file
            {
              loader: MiniCssExtractPlugin.loader,
            },

            //đọc css, sourceMap để lấy đường dẫn
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            // xử lý đường dẫn url trong file sass, vì sass k hỗ trợ url
            {
              loader: "resolve-url-loader",
            },

            //đọc sass, sourceMap để lấy đường dẫn
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      /* inject file to index.html */

      // new HtmlWebpackPlugin({
      //   template: path.resolve(__dirname, "./public/index.html"),
      // }),

      htmlWebpackPlugin,
      pathsPlugin,

      // tạo thành file css/ thay vì dùng <style>
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),

      //minify file css được MiniCssExtractPlugin tạo ra
      // new OptimizeCSSAssetsPlugin({
      //     minimizer: false
      // })

      // new CopyWebpackPlugin({
      //   patterns: [{ from: "./public", to: "./" }],
      // }),
    ],
    // minify js
    optimization: {
      minimize: false,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      port: 4300,
      host: "localhost",
      historyApiFallback: true,
    },
    mode: "development",
  };
  if (argv.mode === "development") {
    config.optimization.minimize = false;
  }

  if (argv.mode === "production") {
    config.optimization.minimize = true;
  }

  return config;
};
