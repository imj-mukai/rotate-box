const path = require('path');

module.exports = {
  // ごりごり書きたい時は見張っててもらう
  // watch: true,
  // development 開発用
  // production 本番用 圧縮
  watch: true,
  mode: 'development',
  entry: {
    'index': './src/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public')
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
      'vue$': 'vue/dist/vue.esm.js' //神よ〜〜〜〜stack overflow〜〜〜〜 https://stackoverflow.com/questions/45654720/webpack-fails-to-mount-vue-components
    }
  }
};