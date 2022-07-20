const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map', // create react app recommends this for some reason
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NAME': JSON.stringify('sahbi'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
