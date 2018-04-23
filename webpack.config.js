const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: {
    'index': './src/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};