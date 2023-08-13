const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // development server port 8000
    port: 8899,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      'api': {
        target: 'http://admin.welldebon.com/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^api': 'api',//重写,
        }
      },
      '/uploads': {
        target: 'http://admin.welldebon.com/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/uploads': '/uploads',//重写,
        }
      }
    }
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|png|jpg|jpeg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
})
module.exports = {
  publicPath: './',

  outputDir: 'dist',
  assetsDir: 'assets',
  runtimeCompiler: false,
  productionSourceMap: true,
}