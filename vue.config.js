const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
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
  chainWebpack: config => {
    // config.module
    //         .rule('ts')
    //         .use('ts-loader')
    //         .loader('ts-loader')
    //         .tap(options => {
    //             return options
    //         })
        

    //     config.optimization.minimizer('terser').tap((args) => {
    //         args[0].terserOptions.output = {
    //             ...args[0].terserOptions.output,
    //             comments: false, // exclude all comments from output
    //         };
    //         return args;
    //     });

  
    // 先刪除預設的svg配置
    config.module.rules.delete("svg")
    
    // 新增 svg-sprite-loader 設定
    config.module
      .rule("svg-sprite-loader") 
      .test(/\.svg$/)
      .include
      .add(resolve("src/components/assets/icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "[name]" })
      
    // 修改 images-loader 配置
    config.module
      .rule("images")
      .exclude.add(resolve("src/components/assets/icon"))
  },
  
};

