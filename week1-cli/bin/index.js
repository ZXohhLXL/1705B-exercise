#! /usr/bin/env node 
//引入fs
// const fs=require("fs")

// const path = require("path")

// let param = process.argv[2].slice(1);

// const url=path.join(process.cwd(),param); // 目标文件夹

// //判断路径是否存在

// if(fs.existsSync(url)){
//     //判断是否是文件还是文件夹
//     if(fs.statSync(url).isDirectory()){
//         let dirList=fs.readdirSync(url);//["css"."index.js","index.html"]
//         let targetList = dirList.map(item => {
//             //获取后缀名
//            let extname = path.extname(item).slice(1)
//            console.log(extname);
//            console.log(extname.slice(1));
//            //文件大小
//            let size = fs.statSync(path.join(param,item)).size
//            //item="dist" 
//            return `${item}-${extname}-${size}`
//         })
//         console.log(targetList);
        
//     }
// }else{
//     console.log("此目录不存在");
    
// }