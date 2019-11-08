const download = require("download-git-repo")
const {exec}=require("child_process")


const param = process.argv[2] ? process.argv[2]:'vue';
let project = param === "vue" ? "vue-dome":"react-dome"

download(`github:ZXohhLXL/${project}`,"test",(error)=>{
    if(error) throw error
    process.chdir(`./test/${project}`)
    exec('npm install')
    console.log("成功");
    
})  //下载的流程