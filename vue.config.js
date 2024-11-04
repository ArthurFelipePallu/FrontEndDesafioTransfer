// vue.config.js

const path = require('path');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    }
  }
};
