const path = require('path')
const resolve = name => path.resolve(__dirname, name);
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    host: '0.0.0.0',
    port: '8081',
    proxy: {
      '/server': {
        target: 'http://localhost:8888/office-in-school-server',
        pathRewrite: { '^/server': '' },
        changeOrigin: true,
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
  }
}