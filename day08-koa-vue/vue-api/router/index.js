const router = require("koa-router")()
const query=require("../db/query")
//查询
router.get("/api/list", async (ctx)=>{
   let result = await query("select * from list")
    try{
         ctx.body={
          code:1,
          msg:result
       }
    }catch(e){
       ctx.body={
          code:0,
          msg:e
       }
    }
})
//添加
router.post("/api/add",async (ctx)=>{
   let {id,xh,title,athor}=ctx.request.body
   //逻辑：校验参数是否完整  完整：查看此人是否存在  不完整：缺少参数
   if(xh&&title){
      //查询此人是否存在
      let dataLen = await query("select * from list where xh=?",[xh])
      console.log(dataLen);
      if(dataLen.data.length){
         //存在
         ctx.body={
            code:3,
            msg:"此人已存在"
         }
      }else{
         //不存在  添加
         let timea = new Date()
             let data=  await query("insert into list (xh,timea,title,athor) values (?,?,?,?)",[xh,timea,title,athor])
           if(data.msg==="success"){
               ctx.body={
               code:1,
               msg:"添加成功"
             }
           }else{
               ctx.body={
               code:0,
               msg:"添加失败"
             }
           }
      }
   }else{
      ctx.body={
         code:2,
         msg:"参数不完整"
      }
   }
})
//删除
router.get("/api/del",async (ctx)=>{
   //逻辑：根据传过来的id判断有没有  有的话 删除
   let {id} =ctx.query
   if(id || id===0){
      try{
         await query("delete from list where id=?",[id])
          ctx.body={
          code:1,
          msg:"删除成功"
       }
      }catch(e){
          ctx.body={
          code:0,
          msg:e
       }
      }
   }
})
//修改
router.post("/api/edit",async (ctx)=>{
   //根据id修改  
    let {id,xh,title,athor}=ctx.request.body
    if(xh && title){
       try{
            let timea = new Date();

            await query("update list set xh=?,timea=?,title=?,athor=? where id=?",[xh,timea,title,athor,id])
            ctx.body = {
                  code:1,
                  msg:'修改成功'
            }
         }catch(e){

            ctx.body = {
               code:0,
               msg:e.error
            }
         }
    }else{
        ctx.body={
         code:2,
         msg:"参数不完整"
      }
    }
})



module.exports=router