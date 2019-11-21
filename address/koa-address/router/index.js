const router = require("koa-router")()
const query = require("../db/query")
//增
router.get("/api/add",async (ctx)=>{
    let {username,phone,address,quanadd}= ctx.query
  console.log(username,phone,address,quanadd);
  
    //缺少参数判断
    if(!username || !phone || !address || !quanadd){
        return ctx.body={code:2,msg:"缺少参数"}
    }
    if(phone.length!=11){
        return ctx.body={code:2,msg:"手机号格式不正确"}
    }
    let data= await query("insert into address (username,phone,address,quanadd) values (?,?,?,?)",[username,phone,address,quanadd])
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
})
//删
router.get("/api/del",async (ctx)=>{
    let {id} = ctx.query
    let sql = "delete from address where id=?"
    if(id){
       try{
        await query(sql,[id])
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
    }else{
        ctx.body={
            code:2,
            msg:"参数不完整"
        }
    }
})
//改
router.get("/api/edit",async (ctx)=>{
    let {id,username,phone,address,quanadd} = ctx.query
    let sql = "update address set username=?,phone=?,address=?,quanadd=? where id=?"
    console.log(id,username,phone,address,quanadd);
    
    if(id && username){
       try{
        await query(sql,[username,phone,address,quanadd,id])
         ctx.body={
            code:1,
            msg:"修改成功"
           }
       }catch(e){
           ctx.body={
            code:0,
            msg:e
           }
       }
    }else{
        ctx.body={
            code:2,
            msg:"参数不完整"
        }
    }
})
//查
router.get("/api/list",async (ctx)=>{
   try{
     let data=await query("select * from address")
       ctx.body={
           code:0,
           msg:data.data
           }
   }catch(e){
         ctx.body={
           code:0,
           msg:e
           }
   }
})
module.exports= router