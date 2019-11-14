const router = require("koa-router")()
const query = require("../db/query.js")
//所有项
router.get("/api/list",async (ctx)=>{
    let {pagenum=1,pagesize=3}=ctx.query
    let startIndex=(pagenum-1)*pagesize
  try{
  let data= await query(`select * from banner limit ${startIndex},${pagesize}`)
  let total = await query("select count(*) from banner")

  
    ctx.body={
        code:1,
        msg:data,
        total:total.data[0]["count(*)"]
    }
  }catch(e){
        ctx.body={
        code:0,
        msg:e
    }
  }
})

//添加
router.get("/api/add",async ctx=>{
    let {bz,type,pai} = ctx.query
    //参数校验->查询此排序是否存在
    if(bz && type){
       let dataLen = await query("select * from banner where pai=?",[pai])
      if(dataLen.data.length){
          //存在
            ctx.body={
            code:0,
            msg:"此商品已存在"
        }
      }else{
          //不存在
          let create_time = new Date()
          try{
              await query("insert into banner (bz,type,pai,create_time) values (?,?,?,?)",[bz,type,pai,create_time])
                ctx.body={
                code:1,
                msg:"添加成功"
          }
          }catch(e){
               ctx.body={
                code:0,
                msg:e
          }
          }
      }    
    }else{
        ctx.body={
            code:3,
            msg:"参数不完整"
        }
    }
})

//删除
router.post("/api/del",async ctx=>{
    //删除逻辑  传入id
    let {id} = ctx.request.body
    //参数校验
    if(id || id===0){
       try{
        await query("delete from banner where id=?",[id])
           ctx.body={
            code:0,
            msg:"删除成功"
        } 
       }catch(e){
            ctx.body={
            code:1,
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


router.get("/api/edit",async ctx=>{
    //修改逻辑：根据传入的id进行修改
    let {bz,type,pai,id} = ctx.query
    if(id&&bz&&type&&pai){
      try{
        await query("update banner set bz=?,type=?,pai=? where id=?",[bz,type,pai,id])
          ctx.body={
            code:0,
            msg:"修改成功"
        } 
      }catch(e){
            ctx.body={
            code:1,
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

//模糊搜索
router.get("/api/server",async ctx=>{
    //模糊搜索  根据传过来的值进行搜索
    let {key} = ctx.query
      
    try{
      let data= await query(`select * from banner where type like '%${key}%'`)
      console.log(data);
      
      ctx.body={
          code:0,
          msg:data.data
      }
    }catch(e){
        ctx.body={
            code:2,
            msg:e
        }
    }

})
module.exports = router