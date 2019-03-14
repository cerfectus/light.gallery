const express = require("express")
const hbs = require("hbs")
const app = express()

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res,next) => {
    res.render("index")

})
app.get("/posts",(req, res,next)=> {
    res.render("posts")
})


app.listen(3000, ()=> {
    console.log("listening on port 3000")
})