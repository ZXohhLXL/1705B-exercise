// const fs = require("fs")

// let readStream = fs.createReadStream("./package.json")
 
//  let data = ""

//  readStream.on("data",(chunk)=>{
//      console.log(chunk);
//      data+=chunk
//  })

// readStream.on("end",()=>{
//     console.log(data);
    
// })

// readStream.on("error",error=>{
//     console.log(error);
// })

var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('11.8理论.mp4');

// 创建一个可写流
var writerStream = fs.createWriteStream('out.mp4');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");