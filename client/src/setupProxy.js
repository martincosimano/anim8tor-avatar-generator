const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/getAllAvatars',
    createProxyMiddleware({
      target: 'https://animated-avatar-generator.onrender.com',
      changeOrigin: true
    })
  );
  app.use(
    '/likeAvatar',
    createProxyMiddleware({
      target: 'https://animated-avatar-generator.onrender.com',
      changeOrigin: true
    })
  );
  app.use(
    '/deleteAvatar',
    createProxyMiddleware({
      target: 'https://animated-avatar-generator.onrender.com',
      changeOrigin: true
    })
  );
  app.use(
    "/addAvatar",
    createProxyMiddleware({
      target: "https://animated-avatar-generator.onrender.com",
      changeOrigin: true,
      pathRewrite: {
        "^/addAvatar": "",
      },
    })
  );
};
