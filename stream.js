// const { channel } = require("diagnostics_channel")
const fs=require("fs")

const stream=fs.createReadStream(__dirname+"/text.txt","utf-8")
const writable=fs.createWriteStream(__dirname+"/writew.txt")

// stream.on('data',(chunk)=>{
//     console.log(chunk)
// writable.write(chunk);
// })


stream.pipe(writable)
