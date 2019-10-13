const path = require('path');

const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test:   /\.css$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
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
  plugins:  [
     new SimpleProgressPlugin(),
     new HtmlWebPackPlugin({
        template: './src/index.html',
        minify:{
          collapseWhitespace: true, 
          removeComments: true, 
          removeRedundantAttributes: true, 
          removeScriptTypeAttributes: true, 
          removeStyleLinkTypeAttributes: true, 
          useShortDoctype: true 
        }
    }),
     new MiniCssExtractPlugin({
      filename: "styles.css"
  })],
};