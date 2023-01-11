const path = require('path');
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "./src/styles/style.scss";
          @import "src/assets/scss/style-import.scss";
        `,
        sassOptions: {
          includePaths: [
              'src/assets/scss'
          ]
        }, //end: sassOptions
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
