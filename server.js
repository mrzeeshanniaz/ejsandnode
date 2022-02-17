const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
  });

setInterval(()=>{
  io.emit("image","image data");

},1000)

server.listen(process.env.PORT || 5000)