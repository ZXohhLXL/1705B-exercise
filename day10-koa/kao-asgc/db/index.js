const mysql = require("mysql")

const connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root",
    database:"1705b-banner"
})
connection.connect((error)=>{
    if(error){
        console.log("数据连接失败");
    }else{
        console.log("数据连接成功");
        
    }
})

module.exports = connection