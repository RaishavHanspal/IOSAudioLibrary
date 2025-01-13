const path = require('path');

module.exports = {
  entry: './main.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/, 
        use: 'html-loader',
      }
    ],
  },
  plugins: [],
  devServer: {
    static: './dist',
    port: 8080
  },
  mode: 'development'
};
