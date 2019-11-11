const router = require("koa-router")()
const query=require("../db/query")
router.get("/list", async (ctx)=>{
   let result = await query
})


module.exports=router