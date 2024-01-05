const http=require("http")

const server=http.createServer()

server.on("request",(req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.end("server listen")
})

server.listen(3000,()=>{
console.log("server running")
})