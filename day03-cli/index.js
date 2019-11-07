#! /usr/bin/env node

let file="dome"

if(process.argv ==="-v"){
    console.log("1.0.1");
}else if(process.argv[2]==="create"){
   file=process.argv[3]?process.argv[3]:file
    console.log("项目创建成功"+file);
        
}