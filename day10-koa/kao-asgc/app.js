const Koa =require("koa")

const app =new Koa()

const path = require("path")

const static =require("koa-static")

const bodyparser = require("koa-bodyparser")

const router = require("./router")

app.use(bodyparser())

app.use(router.routes())

app.use(static(path.join(process.cwd(),"public")))
app.listen(process.env.PORT || 3000,()=>{
    console.log("服务已启动");
})