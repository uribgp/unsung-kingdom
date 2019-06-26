'use strict'

const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['phaser']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        include: path.resolve(__dirname, 'src/'),
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { targets: { node: 'current' } }]
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080
  },
  plugins: [
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/index.html'),
        to: path.resolve(__dirname, 'public')
      }
    ]),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    })
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  performance: { hints: false }
}
