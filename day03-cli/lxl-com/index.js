#! /usr/bin/env node

let program = require("commander")

let inquirer = require("inquirer")

let fs=require("fs")

let path=require("path")
// program
//     .version('0.1.0',"-v,--version")//-V/--version
//     .option("-a,--add","add something")//定义命令的选项
//     .option('-u,--update','update something')
//     .option('-r,--remove','remove something')
//     .option('--add-file','add a file')//以驼峰命名
//     .option('--no-add','not add a file')//以no形式开头
//     .parse(process.argv)//解析命令行参数

// console.log("You Choose:");

// if(program.add){
//     console.log("add something");
// }else{
//     console.log("no add a file");
    
// }

// if(program.update)console.log("update something");

// if(program.remove)console.log("remove something");

// if(program.addFile)console.log("add a file");

// const promptList = [{
//     type: 'input',
//     message: '设置一个用户名:',
//     name: 'name',
// },{
//     type: 'password',
//     message: '设置一个密码:',
//     name: 'pwd', 
// },{
//     type: 'input',
//     message: '输入邮箱:',
//     name: 'email',
  
// }];

const promptList = [{
    type: 'input',
    message: '输入项目名称:',
    name: 'name',
},{
    type: 'input',
    message: '输入版本号:',
    name: 'version', 
}];

let userlist=[{username:"lxl",pwd:"1234"},{username:"zx",pwd:"1234"}]
program
       .command("login")
       .description("登录npm的官网")//描述项
       .action(function() {
        //    console.log("登录npm的官网");
            inquirer.prompt(promptList).then(answers => {
            console.log(answers); // 返回的结果
            // let result=userlist.some(item=>item.username===answers.name && item.pwd===answers.pwd)
            //     console.log(result);
            // if(result){
            //     console.log("登陆成功");
            // }else{
            //     console.log("登陆失败");
                
            // }
            // fs.writeFileSync(path.join(process.cwd(),"package.json"),JSON.stringify(answers))
            })
       }) 
    
program.parse(process.argv)