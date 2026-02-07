let { product_model } = require('../../models/schema')

let insert_product = (req, res) => {
    let { name, color, category, price } = req.body;
    let enquire = new product_model({
        name,
        color,
        category,
        price
    });
    enquire.save().then(() => {
        res.send({ status: 200, msg: "data saved" });
    }).catch((err) => {
        res.send({ status: 200, msg: "data not saved", error: err });
    })
}

let show_product = async (req, res) => {
    let pro = await product_model.find();
    res.status(200).json({ status: 200, msg: "sucessful", productlist: pro });
}

let delete_product = async (req, res) => {
    let id = req.params.id;
    let del = await product_model.deleteOne({ _id: id });
    res.status(200).json({ status: 200, msg: "sucessful", deleted: del });
}

let get_single_product = async (req, res) => {
    let id = req.params.id;
    let pro = await product_model.findOne({ _id: id });
    res.status(200).json({ status: 200, msg: "sucessful", product: pro });
}

let update_product = async (req, res) => {
    let id = req.params.id;
    let { name, color, category, price } = req.body;
    let up_data = {
        name,
        color,
        category,
        price
    }
    let up = await product_model.updateOne({ _id: id }, up_data).then(() => {
        console.log("updated data");
    }).catch((err) => {
        res.status(500).json({ msg: "error !!!", error: err })
    })
    res.status(200).json({ status: 200, msg: "sucssful", up_dt: up });
}

module.exports = { insert_product, show_product, delete_product, update_product, get_single_product };