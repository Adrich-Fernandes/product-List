let express = require("express");
const { insertUser, showUser, deleteUser, updateUser } = require("../../controller/userEnqCtrl");
let enq_routs = express.Router();
enq_routs.post("/api/user-insert",insertUser);
enq_routs.get("/api/user-show",showUser);
enq_routs.delete("/api/user-del/:id",deleteUser);
enq_routs.put("/api/user-up/:id",updateUser);

module.exports={enq_routs};