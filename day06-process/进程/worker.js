//处理业务逻辑

const http=require("http")

//创建一个服务器

let childServer=http.createServer((req,res)=>{
    if(req.url === "/list"){
        res.end("list")
    }else if(req.url === "/error"){
        throw Error("error")
    }else{
        res.end("ok")
    }
})
process.on("message",(flag,server)=>{
    if(flag ==="server"){
        //TCP流 前端请求消息
        server.on("connection",socket=>{
            // console.log(socket);
            
            childServer.emit("connection",socket)
        })
    }
})

process.on("uncaughtException",()=>{
    //有异常
    console.log("有异常");
    process.send({m:"error"})
    
})
