var mongoose = require("mongoose");

let user_enq_shcema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requred:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

let enq_model = mongoose.model("enquire",user_enq_shcema);
module.exports={enq_model};