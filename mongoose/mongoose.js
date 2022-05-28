const mongoose = require("mongoose")
const express  = require("express")
const app = express()

const url = "mongodb+srv://abhinavbhai:babubhangi@pizza.sa2cq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,})
.then((result) => console.log('ATLAS connected now !!'))
.catch((err) => console.log(err));

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(3050,()=>console.log('connected to port !!!'))