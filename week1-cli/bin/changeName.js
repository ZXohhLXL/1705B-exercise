#! /usr/bin/env node


let oldName =  process.argv[2] && process.argv[2].slice(1);
console.log(oldName);

let newName = process.argv[3] && process.argv[3].slice(1);

const path = require('path');

const fs = require('fs');

if(fs.existsSync(path.join(process.cwd(),oldName))){
   fs.renameSync(oldName,newName); 
}else{
    console.log("此路径不存在");
    
}