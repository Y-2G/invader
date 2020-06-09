const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/script/main.js'),
  output: {
    filename: 'script/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: 'dist',
    open: true
  }
};
