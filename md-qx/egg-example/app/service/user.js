'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    return await this.app.mysql.query("select * from userlist")
  }
  async login(username,password){
    return await this.app.mysql.query("select * from userlist where username=? and password=?",[username,password])
  }
  async menu(roleid){
      return await this.app.mysql.query(`select * from menulist where power like '%${roleid}%'`)
  }
}

module.exports = UserService;
