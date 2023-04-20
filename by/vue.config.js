module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.113.230.184:9527/api', // 修改为你要请求的服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 如果你的接口路径中没有 '/api'，则需要将这里的路径修改为你的接口路径中的前缀
        }
      }
    }
  }
}
