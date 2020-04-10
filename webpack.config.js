const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'math-utils.js',
    library: 'mathUtils',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
}
