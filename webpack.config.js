const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ANTDCSSFILEPATH = path.resolve(__dirname, './node_modules/antd/dist/antd.less');
module.exports = {
  entry: './app/index.tsx',
  output: {
    path: path.resolve(process.cwd(), 'dist'), //__dirname?
    filename: 'index_bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: ['ts-loader'],
    }
  ],
  },
  mode: 'development', 
  devServer: {
    hot: true,
    historyApiFallback: true,
    // contentBase: path.resolve(process.cwd(), 'app'), //__dirname
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.gif', '.png', '.svg'],
  },
};