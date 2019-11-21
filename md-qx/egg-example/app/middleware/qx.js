const jwt = require("jsonwebtoken")

let whitePath=[
    "/api/login"
]

module.exports =()=>{
    return async (ctx,next)=>{
        if(whitePath.includes(ctx.path)){
            await next()
        }else{ 
            // console.log(ctx.request.headers);  
            const token = ctx.cookies.get("token")
      
            console.log("^^^^^^^^^^",ctx.cookies.get("token"));
            if(!token){
                ctx.body = {
                    code:3,
                    msg:"没有权限"
                }
                return
            }
            
            try{
                //登录
                const userInfo = jwt.verify(token,"李现利")
                // console.log(userInfo);
                await next()
            }catch(e){
                if(e.name === "TokenExpireError"){
                    ctx.body = {
                        ccode:0,
                        msg:"登录过期，请重新登陆"
                    }
                }
            }
            
        }
    }
}