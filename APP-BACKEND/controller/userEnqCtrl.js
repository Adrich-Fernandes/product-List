let {enq_model} = require('../models/schema')

let insertUser = (req,res)=>{
    let {sname,semail,sphone,smessage} = req.body;
    let enquire = new enq_model({
        name:sname,
        email:semail,
        phone:sphone,
        message:smessage
    });
    enquire.save().then(()=>{
        res.send({status:200,msg:"data saved"});
    }).catch((err)=>{
        res.send({status:200,msg:"data not saved",error:err});
    })
}

let showUser = async(req,res)=>{
    let enq = await enq_model.find();
    res.status(200).json({status:200,msg:"sucessful",data:enq});
}

let deleteUser = async (req,res)=>{
    let id = req.params.id;
    let del = await enq_model.deleteOne({_id:id});
    res.status(200).json({status:200,msg:"sucessful",deleted:del});
}

let updateUser = async(req,res)=>{
    let id = req.params.id;
    let {sname,semail,sphone,smessage} = req.body;
    let up_data = {
        n:sname,
        e:semail,
        p:sphone,
        m:smessage
    }
    let up = await enq_model.updateOne({_id:id},up_data).then(()=>{
        console.log("updated data");
    }).catch((err)=>{
        res.status(500).json({msg:"error !!!",error:err})
    })
    res.status(200).json({status:200,msg:"sucssful",up_dt:up});
}

module.exports={insertUser,showUser,deleteUser,updateUser};