const express = require("express");
var mongoose = require("mongoose");
const { enq_routs } = require("./routs/web/enquireRouts");
// const { insertUser, showUser, deleteUser, updateUser } = require("./controller/userEnqCtrl");
require("dotenv").config();
const app = express();
exports.app = app;
app.use(express.json());

app.use("/web",enq_routs);

mongoose.connect(process.env.dburl).then(()=>{
    console.log("connected to mongoDB");
    app.listen(process.env.port||7000,()=>{
        console.log("running on port -->",process.env.port);
    })
});