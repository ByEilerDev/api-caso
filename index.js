const express= require ("express");
const bodyParser= require ("body-parser");
const app= express();
app.use(bodyParser.json())

app.post("/login",function(req,res){
const {username,password}= req.body;

if(username=="admin" && password== "1234"){
    res.status(200).json({
        message:"ok"
    })
} else {
    res.status(401).json({
        message:"fallido"
    })
}
})
app.listen(4000)
