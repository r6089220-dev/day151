const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Student = require("./models/Student");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(() =>{
console.log("MONGODB CONNECTED");

})
.catch((err) =>{
// console.log(process.env.MONGODB_URL)
console.log("unable to conected Db",err);

});

app.post("/api/students", async (req,res) =>{

try{

    const student = await Student.create(req.body);
    res.json({


message:"Record saved",
data:student

    });



}
catch (err){

 console.log("unable to sore data",err) ;   

}

});

app.get("/api/students", async (req,res) =>{

try{

    const student = await Student.find();
    res.json({


message:"All Record",
data:students

    });



}
catch (err){

 console.log("Record mil nahi raha hai",err) ;   

}

});





const PORT = process.env.PORT|| 5001;


app.listen(PORT,()=>{

    console.log("server conected at",PORT);
})

