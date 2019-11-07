let Koa=require("koa")

let app=new Koa()

let path=require("path")
let static=require("koa-static")

app.use(static(process.cwd()))

module.exports=app