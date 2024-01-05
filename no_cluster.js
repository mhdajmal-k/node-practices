const http=require("http")
const os=require("os")

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("HOME PAGE")
    }else if(req.url==='/about'){
        for(let i=1;i<6000000000000000;i++){

        
        res.writeHead(200,{"content-type":"text/html"})
        res.end("show in about page")
    }}
})
console.log(os.cpus().length)
server.listen(2000,()=>{
    console.log("server running....")
})