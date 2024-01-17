let express=require('express')
let app= express()
let db=require('mongoose')

let parse=require('body-parser')
app.use(parse.json({extended:true}))
app.use(parse.urlencoded({extended:true}))

let myschema=db.Schema({
    name:{type:String,require:true},
    ph:{type:String,require:true}
})

//myuser alternative name for myschema
let mymodel=db.model("myuser",myschema)
db.connect("mongodb://localhost:27017/demodb").then(()=>{console.log("db connected");})  //to connected msg
.catch((error)=>{
    console.error("connection failed"+error);
})

app.get("/",(req,res)=>{
    let{name,ph}=req.body //request body not a get method
    let data={name:"sakthi",ph:"234567876"}
    let result=mymodel.create({name,ph})
    res.send(result);
    
})


app.listen(4000)