'use strict';

const Controller = require('egg').Controller;
const jwt =require("jsonwebtoken")
class UserController extends Controller {
  async list() {
    let { ctx,service } = this
    let data = await service.user.list()
    ctx.body = data
  }
  async login(){
    let {ctx,service} = this
    let {username,password} = ctx.request.body
    //容错处理
    if(username && password){
        //查看是否存在
        let data = await service.user.login(username,password)
      
        if(!data.length){
          ctx.body={
            code:0,
            msg:"用户名或密码错误"
          }
        }else{
          //生成token
          let token = jwt.sign({username,password,roleid:data[0].roleid},"樊英辰",{expiresIn:"10h"})
           ctx.body={
            code:1,
            msg:"登陆成功",
            token,
            rolename:data[0].rolename
          }
        }
    }else{
      ctx.body = {
        code:0,
        msg:"参数缺失"
      }
    }
  }
  async menu(){
    const {ctx,service} =this
    // console.log(ctx.request.header.token);
    let token = ctx.request.header.token
    let info = jwt.verify(token,"樊英辰")
    // console.log("========info",info);
    //查权限
    //捕获错误  不叫容错
    try{
     let data = await service.user.menu(info.roleid)
     console.log("data===",data);
       ctx.body={
           code:0,
           msg:data
         }
    }catch(e){
      ctx.body={
           code:1,
           msg:e
         }
    }
  }
  // async login(){
  //    let { ctx,service } = this
  //    let {username,password} = ctx.request.body
  //    let token = jwt.sign({username,password},"李现利",{expiresIn:"10h"})
     
  //    console.log("^^^^^^^^++++",token);
  //    ctx.cookies.set("token",token)
  //    let dataLen =  await service.user.login(username,password)
  //      if(!dataLen.length){
  //        ctx.body={
  //          code:0,
  //          msg:"用户名或密码错误"
  //        }
  //      }else{
  //        ctx.body={
  //          code:1,
  //          msg:"登陆成功",
  //          token:token
  //        }
  //      }
  // }
}

module.exports = UserController;
