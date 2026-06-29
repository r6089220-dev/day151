const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({

    name: {
type: String,
required:true

    },
    email: {

type:String,
required:true,
unique:true 

    },
    city: {
type:String,
default: "gorakhpur"

    },
    age: {

    type:Number
    }

}, {

    timestamps: true

});
module.exports = mongoose.model("student", studentSchema);