const path = require('path');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
console.log(__dirname)
module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'src/app.ts'),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
       
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins:[
      new SimpleProgressPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
       
    }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 9000
    }
  };