const Eventemmiter=require("events")

let emmite=new Eventemmiter()

emmite.on("click",(data)=>{
    console.log("you are listening"+data)
})

emmite.emit("click",'and you have learned')

