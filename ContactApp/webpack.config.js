module.exports = {
  entry: [
    './app/app.js'
    // './source/props.js'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
    test: /\.jsx?$/,
    loader: 'babel'
    }]
  }
};