const express = require("express");
var mongoose = require("mongoose");
const { product_routs } = require("./routs/web/productRouts");
require("dotenv").config();
let cors = require("cors");
const app = express();
exports.app = app;

app.use(cors());
app.use(express.json());

app.use("/web",product_routs);

mongoose.connect(process.env.dburl).then(()=>{
    console.log("connected to mongoDB");
    app.listen(process.env.port||7171,()=>{
        console.log("running on port -->",process.env.port);
    })
});