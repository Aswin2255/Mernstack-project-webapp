const jwt = require("jsonwebtoken");
const db = require('../connection')
const collection = require('../collection');
const { ObjectId } = require("mongodb");
module.exports.Verifyuser = (req,res,next)=>{
    const token = req.cookies.jwt;
    console.log('hii')
    if(token){
        jwt.verify(token,"secret",async (err,decodedToken)=>{
            if(err){
                res.json({status:false,message:'token expired'})
                
            }
            else{
                console.log(decodedToken.id)
                const user = await db.get().collection(collection.usercollection).findOne({_id: ObjectId (decodedToken.id)})
                console.log('kkkkkkkkkkkkkkkkk')
                console.log(user)
                
                if(user){
                   
                    res.userdetails = user
                    next()
                }
                else{
                    res.json({status:false})
                    
                }
            }

            

        })

    }
    else{
        res.json({status:false})
        

    }
}