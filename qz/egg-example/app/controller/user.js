'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    //注册
  async registry() {
   const { ctx,service } = this;
   let {username,password} = ctx.query
   //注册逻辑  判断此人是否存在
   let data = await service.user.userData(username)
   console.log(data);
   if(data.length){
       //存在
       ctx.body={
           code:2,
           msg:"此人已存在"
       }
   }else{
        //不存在     
    try{
       await service.user.registry(username,password)
        ctx.body={
            code:0,
            msg:"添加成功"
        }
    }catch(e){
        ctx.body={
            code:1,
            msg:e
        }
    }
   }
  }

  //所有项
  async list(){
       const { ctx,service } = this;
    let data= await service.user.list() 
    ctx.body= data
  }

  //登录
  async login(){

      let {ctx,service}=this

      let {username,password} = ctx.request.body

      let user =  await service.user.login(username,password)
        if(!user.length){
            ctx.body={
                code:2,
                msg:"用户名或密码错误"
            }
        }else{
            ctx.body={
                code:0,
                msg:"登录成功"
        }
        }
      
  }
}

module.exports = UserController;
