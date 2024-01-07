const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/apis": {
        target: '代理地址'
      }
    }
  },
  configureWebpack: require('./webpack.config')
})
