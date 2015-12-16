var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: '#dev-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'element': 'magic-virtual-element',
    }),
    //new webpack.optimize.UglifyJsPlugin({
    //})
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, 
        loader: 'babel?presets[]=es2015' }
    ]
  },
  devServer: {
    contentBase: __dirname,
  }
};
