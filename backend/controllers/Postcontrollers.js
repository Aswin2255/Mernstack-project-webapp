const { createposthelper, editposthelper, deletepost, deleteposthelper, getposthelper, getuserposthelper } = require("../helpers/Posthelpers")

module.exports.createpost =  async (req,res,next)=>{
    return new Promise(async(resolve, reject) => {
        console.log('kinijnjnjn')
        console.log(req.body)
        console.log(res.userdetails._id)
        req.body.userid = res.userdetails._id
         await createposthelper(req.body).then((data)=>{
            res.json({status:true,user:req.body.userid,message:'post created',userpost:req.body.post})
         }).catch((er)=>{
            console.log(er)
            res.json({status:false,message:'post creation failed'})
         })
        })
}
module.exports.getuserpost = async (req,res,next)=>{
    return new Promise(async(resolve, reject) => {
         await getuserposthelper( res.userdetails._id).then((data)=>{
            res.json({status:true,post:data,user:res.userdetails.username})
        })
        
    })
}

module.exports.editpost = async(req,res,next)=>{
    return new Promise(async(resolve, reject) => {
        console.log(req.body)
        req.body.userid = res.userdetails._id
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
        await deleteposthelper(req.body._id).then((data)=>{
            res.json({status:true,message:'post deleted',data:data})
        }).catch((er)=>{
            res.json({status:false,message:"post error"})
        })
        
    })
}