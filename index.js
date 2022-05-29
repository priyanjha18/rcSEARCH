const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const api=require("car-registration-api-india");
app.use(bodyParser.urlencoded({extended:true}));
const PORT=5000;
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/",(req,res)=>{
    var carno=req.body.carno;
    console.log(carno)
    api.CheckCarRegistrationIndia(carno,"priyan18",(data)=>{
        console.log(data);
        res.write(`your veichle name is ${data.Description}`);
        
    })

})
app.listen(PORT,()=>{
    console.log(`server listeninig on port ${PORT}`)
})