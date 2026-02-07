var mongoose = require("mongoose");

let product_shcema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        requred:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

let product_model = mongoose.model("product",product_shcema);
module.exports={product_model};