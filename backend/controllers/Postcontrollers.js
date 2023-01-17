const { createposthelper, editposthelper, deletepost, deleteposthelper } = require("../helpers/Posthelpers")

module.exports.createpost =  async (req,res,next)=>{
    return new Promise(async(resolve, reject) => {
        console.log('kinijnjnjn')
        console.log(req.body)
        console.log(res.userdetails._id)
        req.body.userid = res.userdetails._id
         await createposthelper(req.body).then((data)=>{
            res.json({status:true,user:req.body.userid,message:'post created'})
         }).catch((er)=>{
            console.log(er)
            res.json({status:false,message:'post creation failed'})
         })
        })
}

module.exports.editpost = async(req,res,next)=>{
    return new Promise(async(resolve, reject) => {
        console.log(req.body)
        await editposthelper(req.body).then((data)=>{
            res.json({status:true,message:'post edited'})
        }).catch((er)=>{
            res.json({status:false,message:'post error'})
        })
        
    })
}

module.exports.deleteposth = async(req,res,next)=>{
    return new Promise(async(resolve, reject) => {
        console.log(req.body)
        await deleteposthelper(req.body.id).then((data)=>{
            res.json({status:true,message:'post deleted'})
        }).catch((er)=>{
            res.json({status:false,message:"post error"})
        })
        
    })
}