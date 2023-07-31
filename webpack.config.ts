const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jp(e*)g|svg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: './dist',
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
    new MiniCssExtractPlugin(),
    new Dotenv('.env'),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@images': path.resolve(__dirname, 'src/images'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@businessLogic': path.resolve(__dirname, 'src/businessLogic'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@validations': path.resolve(__dirname, 'src/validations'),
    },
  },
};

module.exports = config;
