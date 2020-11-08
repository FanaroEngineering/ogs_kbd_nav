const path = require('path');

module.exports = {
  entry: './lib/src/content.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts' ],
  },
  output: {
    filename: 'content.js',
    path: path.resolve(__dirname, 'dist'),
  },
};