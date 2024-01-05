const express=require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send("its runing")
})

app.get('/about/:name',(req,res)=>{
    const name=req.params.name
    res.send(name)
})

app.get('/home',(req,res)=>{
    const name=req.query.name
    res.send(name)
})

app.listen(2000,()=>{
    console.log("running...")
})
