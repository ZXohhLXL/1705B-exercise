#! /usr/bin/env node

let app=require("../server")

// console.log(process.argv[2]);
// console.log(version);
let port = 8080
//引入package.json 版本号

let {version}=require("../package.json")
if(process.argv[2]==="-v"){
    console.log(version)
}else{
    port = process.argv[2]&&process.argv[3] ? process.argv[3]:port
    console.log(port);
    app.listen(port,()=>{
         console.log("服务启动成功",port);
     })
}
    
 

