const Koa =require("koa")
const path = require("path")
const static = require("koa-static")
const bodyparser = require("koa-bodyparser")
const router = require("./router")
const app = new Koa()
app.use(static(path.join(process.cwd(),"public")))
app.use(bodyparser())
app.use(router.routes())
app.listen(process.env.PORT || 3000,()=>{
    console.log("服务已启动");
})