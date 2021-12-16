const express = require("express")
const app=express()
const mongoose = require('mongoose');//mongoose
const ejs=require('mongoose')
mongoose.connect('mongodb://172.21.2.236:27017/190110910503');//连接数据库

const schema={
    name:String,
    age:Number,
    health:String,
    hobby:String
}
const mydata = mongoose.model('cat1s', schema);
// const kitty = new mydata({ name:'testZildjian2' });//他写进去了吗？
// kitty.save()

app.use('/',express.static('public'))  //此时默认打开的就是html文件
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
    const kitty = new mydata({ name:req.query.first,health:req.query.second });//他写进去了吗？
    kitty.save()
    // ejs.renderFile(filename, data, options, function(err, str){
    //     // str => 输出渲染后的 HTML 字符串
    // });
    ejs.renderFile("result.html",{returnVal:"success"},(err,str)=>{
    res.send(str)
    })
})
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.listen(60503)