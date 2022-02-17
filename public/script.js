const socket = io.connect("http://localhost:5000");

socket.on("image",(data)=>{
    console.log("data",data);
})