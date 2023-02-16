/*
 * @Description: 這是寫入導出文件 元件 脚本
 */
const fs = require('fs');
const path = require('path');

// 設置時間提交git
let content = `/*${new Date()}*/`
let ex = []
let picString = ''
let sassString = ''

// 生成導出代碼脚本
fs.readdir(path.join(__dirname, './src/components'), function (err, files) {
  if (err) {
    console.log('目錄不存在');
    return
  }


  // 處理到處程式碼
  files.forEach(item => {
    // 讀取目錄名稱
    console.log('comp',item);
    if(item != 'assets' && !item.includes('.DS_S')){

      content = content + `import ${item} from './components/${item}';`
      // console.log('111', item)
      ex.push(item)
    }
    // else if (item == 'assets'){
    //   fs.readdir(path.join(__dirname, `./src/components/${item}`), 
    //     function (err, picForders) {
    //       // console.log('111',picForders)
    //       picForders.forEach( e => {
    //         fs.readdir(path.join(__dirname, `./src/components/${item}/${e}`), 
    //         function (err, picFiles) {
    //           picFiles.forEach( eachPic => {
    //             let iconName = eachPic.split('.svg')[0]
    //             // console.log('111',typeof iconName)
    //             picString  = picString + ','+iconName
    //             // console.log('111', pic)
    //             // content = content + `import ${iconName} from './components/${item}/${e}/${eachPic}';`
    //             // pic.push(iconName)
    //           });
    //         })
    //       });
    //     })
    // }

  })
  ex = ex.join(",")

  packPic(ex)
})



function packPic(ex) {

  fs.readdir(path.join(__dirname, './src/components/assets/icon'), function (err, files) {
    if (err) {
      console.log('目錄不存在');
      return
    }
    files.forEach(eachPic => {
      let iconName = eachPic.split('.svg')[0];
      iconName = camelize(iconName)
      picString  = picString + ','+iconName
      // console.log('呱吉2聒聒',iconName)
      content = content + `import ${iconName} from './components/assets/icon/${eachPic}';`

    })
    let tempEx = `${ex}${picString}`
    // content = content + `export { ${ex}${picString}  }; `
    // console.log('picString呱吉2', picString)
    // console.log('picString呱吉2', content)
    

    packSass(tempEx)
  })
  
}

function packSass(tempEx) {

  fs.readdir(path.join(__dirname, './src/assets/scss'), function (err, files) {
    if (err) {
      console.log('目錄不存在');
      return
    }
    files.forEach(eachSass => {
      if(/(.scss)$/.test(eachSass)){
        let cssName = eachSass.split('.scss')[0];
        cssName = camelize(cssName)
        sassString  = sassString + ','+cssName
        console.log('eachSass呱吉2', eachSass)
        content = content + `import ${cssName} from './assets/scss/${eachSass}';`
      }
    })
    content = content + `export { ${tempEx}${sassString}  }; `

    // console.log('sassString呱吉聒聒', content)
    packAll()
  })
  
}


function packAll() {
  // let name = 'uiTaiwind';
  // content += `import './index.css';`;
  // // content = content + `export { ${name} }; `
  // console.log('content',content);

  fs.writeFile(path.join(__dirname, './src/index.js'), content, 'utf8', (err) => {
    if (err) throw err;
  });
  
}


function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/-/g, '');
}