/*
 * @Description: 這是寫入導出文件 元件 脚本
 */
const fs = require('fs');
const path = require('path');

// 設置時間提交git
let content = `/*${new Date()}*/`
let ex = []
let picString = ''

// 生成導出代碼脚本
fs.readdir(path.join(__dirname, './src/components'), function (err, files) {
  if (err) {
    console.log('目錄不存在');
    return
  }


  // 處理到處程式碼
  files.forEach(item => {
    // 讀取目錄名稱
    if(item != 'assets'){
      content = content + `import ${item} from './components/${item}';`
      // console.log('111',typeof item)
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
  // content = content + `export { ${ex} }; `

  packPic(ex)

  // fs.writeFile(path.join(__dirname, './src/index.js'), content, 'utf8', (err) => {
  //   if (err) throw err;
  // });
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
  
    content = content + `export { ${ex}${picString}  }; `
    // console.log('picString呱吉2', picString)
    console.log('picString呱吉2', content)
    packAll()
  })
  
}


function packAll() {

  fs.writeFile(path.join(__dirname, './src/index.js'), content, 'utf8', (err) => {
    if (err) throw err;
  });
  
}


function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/-/g, '');
}