import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const webpackConfig = (): Configuration => ({
  // mode: "production",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/build"),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 8000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      "process.env": process.env.production || !process.env.development,
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}",
      },
    }),
  ],

  // generate source map
  devtool: "inline-source-map",
  // optimization
  optimization: {
    splitChunks: {
      chunks: 'all',
      // cacheGroups: {
      //   default: false,
      //   vendors: false,

      //   // vendor chunk
      //   vendor: {
      //     name: "vendor",
      //     chunks: "all",
      //     test: /node_modules/,
      //     priority: 20,
      //   },

      //   // common chunk
      //   common: {
      //     name: "common",
      //     minChunks: 2,
      //     chunks: "all",
      //     priority: 10,
      //     reuseExistingChunk: true,
      //     enforce: true,
      //   },
      // },
    },
    runtimeChunk: 'single',
  },
});

export default webpackConfig;
