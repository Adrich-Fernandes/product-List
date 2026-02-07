let express = require("express");
const { insert_product, show_product, delete_product, update_product } = require("../../controller/web/productCtrl");

let product_routs = express.Router();
product_routs.post("/api/insert", insert_product);
product_routs.get("/api/show", show_product);
product_routs.delete("/api/delete/:id", delete_product);
product_routs.get("/api/update/:id", update_product);

module.exports = { product_routs };