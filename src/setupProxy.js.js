// 跨域没效果，过后在改
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'http://localhost:4000',
      changeOrigin: true,
      pathRewrite: {
        '^/api/v1': '',
      },
    }),
  )
}
