path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  }
};
