// const http=require("http")

// server=http.createServer((req,res)=>{

//     res.end("heloo")
//     console.log(res)
// })

// server.listen(4000,()=>{
//     console.log("running...")
// })
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const new1=JSON.parse(jsonString)
// console.log(new1)
// const {name,city}=new1

// console.log(name)
// new2=JSON.stringify(new1)
// console.log(new2)
const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("go to path params")

})
app.get('/path/:username',(req,res)=>{
    userName=req.params.username
    res.send(userName)
})
app.get("/user",(req,res)=>{
    userName=req.query.name
    userName2=req.query.nam2
 
    res.send(userName+userName2)
})

app.listen(2003,()=>{
    console.log("server running")
})
