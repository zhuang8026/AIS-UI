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
};
