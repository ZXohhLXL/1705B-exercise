import React, { Component } from 'react'
import axios from "axios"
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
          address:[]
        }
    }
    componentDidMount(){
     axios.get("/api/list").then(res=>{
         this.setState({
            address:res.data.msg
         })
     
     })
    }
    render() {
        let {address} =this.state
        return (
            <div className="wrap">
            <div className="header">
            <p>北京城区</p>
             <input className="ipt" placeholder=" 小区 街道 大厦" />
            <p className="history">历史地址</p>
            </div>
           
            <div className="main">
               {
                   address.map((item,index)=>(
                       <ul className="uls" key={index}>
                            <li>{item.username}</li>
                            <li>{item.phone}</li>
                            <li>{item.address}</li>
                            <li>{item.quanadd}</li>
                            {/* <button>修改</button> */}
                       </ul>
                     
                   ))
               }
            </div>
            <div className="footer"> + 新增地址</div>
            </div>
        )
    }
}
