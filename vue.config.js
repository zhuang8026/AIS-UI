const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./src/styles/style.scss";
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
  },
};
