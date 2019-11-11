const Koa = require("koa")
const app = new Koa()
const path=require("path")
const bodyparser = require("koa-bodyparser")
const static = require("koa-static")
const router = require("./router")
app.use(bodyparser())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(static(path.join(process.cwd(),"public")))

app.listen(3000,()=>{
    console.log("服务已经启动");
})