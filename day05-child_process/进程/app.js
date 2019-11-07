const child = require("child_process");

// console.log("主进程"+process.pid);

//创建子进程 exec spawn fork execFile

// const pro1=child.exec("node child.js -v",(error,stdout,stderr)=>{
//      if(error){
//          console.log(error);
//          return 
//      }
//      console.log("stdout",stdout);
//      console.log("stderr",stderr);
// })
// console.log("pro1",pro1.pid);


// //退出
//  pro1.on("exit",code=>{
//      console.log("退出码"+code);
     
//  })

// const pro2=child.exec("node child2.js",(error,stdout,stderr)=>{
     
//       if(error){
//           console.log(error);
//           return
//       }
//       console.log("stdout",stdout);
//       console.log("stderr",stderr);  
// })

// pro2.on("exit",code=>{
//     console.log("退出码",code);
    
// })

// const pro3=child.spawn("node",['child.js','-v'])
// //标准输出流
// pro3.stdout.on("data",data=>{
//     console.log("data",data.toString());
// })
// //错误
// pro3.stderr.on("data",err=>{
//     console.log("err",err.toString());
    
// })
// //关闭
// pro3.on("close",code=>{
//     console.log(code);
    
// })

const os = require("os")