const http = require("http")

const child_process =require("child_process")//创建多线程 利用多 cpu

const cpuLen = require("os").cpus().length

const server = http.createServer()

server.listen(3000)

let workers={}

function createWorker() {
     let worker = child_process.fork("./worker.js")
     worker.send("server",server)
     workers[worker.pid]=worker
    //  console.log(workers);
      console.log("子进程"+worker.pid);


      worker.on("message",msg=>{
          if(msg.m==="error"){
              console.log("error"+worker.pid);

              //重启
              //把上一个进程删掉 重启
              delete workers[worker.pid]
              createWorker()  
          }
      })

    worker.on("exit",()=>{
        console.log("结束任务"+worker.pid);

        delete workers[worker.pid]
        createWorker()
    })
}


for(let i=0;i<cpuLen;i++){
    createWorker()
}
//主进程  退出

process.on("exit",()=>{
    for(let pid in workers){
        workers[pid].kill()
    }
})