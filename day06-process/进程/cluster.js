const cluster = require("cluster")

const http = require("http")

const cpuLen = require("os").cpus().length

if(cluster.isMaster){
    //是否是主进程
    for(let i=0;i<cpuLen;i++){
        cluster.fork()
    }
}else{
    http.createServer((req,res)=>{
        res.end("ok")
    }).listen(3000)
}

cluster.on("exit",(work)=>{
    console.log(work.pid);
    cluster.fork()
})