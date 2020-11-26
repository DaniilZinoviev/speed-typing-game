const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
  const { MODE: mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  return {
    mode: isProd ? 'production' : 'development',
    entry :'./src/main.js',
    devServer: {
      open: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        template: 'public/index.html'
      })
    ]
  }
}