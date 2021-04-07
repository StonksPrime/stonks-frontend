const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        BACKEND_HOST: JSON.stringify(process.env.BACKEND_HOST),
      }
    })
  ]
};