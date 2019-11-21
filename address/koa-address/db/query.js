const connet = require("./index")

const query=(sql,params=[])=>{
    return new Promise((resolve,reject)=>{
        connet.query(sql,params,(error,data)=>{
            if(error){
                reject({msg:"error",error})
            }else{
                 resolve({msg:"success",data})
            }
        })
    })
}
module.exports = query