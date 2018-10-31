const path = require('path');
require('webpack');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
    sandbox: path.resolve(__dirname, 'src/js/sandbox.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  mode: process.env.NODE_ENV || 'development',

  resolve: {
    alias: {
      '@js': path.resolve(__dirname, 'src/js')
    },
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: path.resolve(__dirname, 'node_modules/googleapis')
      }
    ]
  },

  externals: {
    googleapis: 'commonjs googleapis'
  },

  target: 'node'
};
