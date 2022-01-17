const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config");
const paths = require("./paths");
//console.log("CONFIG ", config);
module.exports = {
  /*  entry: "./src/webpack-dev-server.js", */
  entry: {
    main: path.resolve(__dirname, paths.src + "/webpack-dev-server.js"),
  },
  output: {
    /**
     * With zero configuration,
     *   clean-webpack-plugin will remove files inside the directory below
     */
    path: path.resolve(__dirname, paths.build),
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: paths.public + "/index.html",
    }),
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": process.env.NODE_ENV,
    }),

    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: config.module,
  devServer: {
    hot: true,
    contentBase: __dirname,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      // Fonts Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: "asset/inline" },

      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  /*
  resolve: {
    alias: {
      "remote-component.config.js": path.resolve("./remote-component.config.js")
    }
  } */
};

/*
 not good option, because all have to included in one bundle 
{
  test: /\.(png|jp(e*)g|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "images/[hash]-[name].[ext]",
      },
    },
  ],
},
*/
/*
deprecated....
new webpack.NamedModulesPlugin(),

*/
