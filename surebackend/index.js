const express = require("express")
let cors=require("cors")
let mongo=require("mongoose")
const app=express();
app.use(express.json())
app.use(cors())

mongo.connect("mongodb://localhost:27017/stddb").then(()=>{console.log("db connected");
}).catch((e)=>{
    console.log("not connected",e);
    
})


let std_schema=new mongo.Schema({
    stdname:{
        type:String,
        require:true
    },
    stdmail:{
        type:String,
        require:true
    },
    stdcourse:{
        type:String,
        require:true
    },
    stdnumber:{
        type:String,
        require:true
    },
    stdurl:{
        type:String,
        require:false
    },
    stdage:{
        type:String,
        require:false
    },
    stdgender:{
        type:String,
        require:false
    }

})

let stdmodel=mongo.model("students",std_schema)

    // stdmodel.create()
    
app.post("/addemp",(req,res)=>{
    let data=req.body;  
    console.log(data);
    stdmodel.create(data);
})

app.get("/dis", async(req,res)=>{
    req.query.filter
    console.log(req.query.filter);
    let gender=req.query.gender
    console.log("gender",gender);


    if(gender){
    const fillArray = req.query.filter.split(",");
    console.log(fillArray);
    let filldata= await stdmodel.find({"stdcourse": {$in: fillArray},"stdgender":gender})
    // console.log(filldata);
    res.json(filldata)

    }
    else{
        const fillArray = req.query.filter.split(",");
        console.log(fillArray);
        let filldata= await stdmodel.find({"stdcourse": {$in: fillArray}})
        // console.log(filldata);
        res.json(filldata)
        let data=await stdmodel.find({})
    }
    

})

// get edit data-------------

app.get("/edit",async(req,res)=>{
    let id=req.query.q
    console.log("id",id);
    const student = await stdmodel.findById(id)
    console.log(student);
    res.json(student)
        })

//set edit data------------------- 

app.patch("/edit",async(req,res)=>{
    
    let id=req.query.q
    console.log(id);
    const student = await stdmodel.findById(id)
    console.log("old data:",student);
    let updateddata=req.body
    console.log("updaed data:",updateddata);
    let finaldata= await stdmodel.findByIdAndUpdate(id, { $set: updateddata });
    const dbupdate = await stdmodel.findById(id)
    console.log("db updaed data:",updateddata);
    
    res.json(student)
        })

// delete----------------------------

app.delete("/delete",async(req,res)=>{
    // console.log(req.query.q)
    let id =req.query.q
    const student = await stdmodel.findById(id)
    console.log(id);
    console.log(student);
    let deletedStudent= await stdmodel.findByIdAndDelete(id);
    if (deletedStudent) {
    console.log("Deleted student:", student);
    res.json({"deleted":student})
} else {
    console.log("No student found with that ID.");
    res.json("not deleted error")

}

})

















let port=5000
app.listen(port,()=>{
    console.log(`server running on :http://localhost:${port}`);
    
})






