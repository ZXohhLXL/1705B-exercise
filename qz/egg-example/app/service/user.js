const {Service} =require("egg")

class UserService extends Service{
    //注册
    async registry(username,password){
        let result = await this.app.mysql.query("insert into userlist (username,password) values (?,?)",[username,password])
        return result
    }
    //列表
    async list(){
        let result= await this.app.mysql.query("select * from userlist")
        return result
    }
    //查询此人是否存在
    async userData(username){
        let user = await this.app.mysql.query("select * from userlist where username=?",[username])
        return user
    }
    //登录
    async login(username,password){
         let user = await this.app.mysql.query("select * from userlist where username=?&&password=?",[username,password])
        return user
    }
}

module.exports= UserService