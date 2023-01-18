const { registeruser, loginuser } = require("../helpers/Userhelpers");
const jwt = require('jsonwebtoken')
 const maxage = 3 * 24 * 60 * 60
const createtoken = (id) =>{
   return  jwt.sign({id},'secret',{
        expiresIn:maxage
    })
}

module.exports.register = async (req,res,next)=>{
   
    
        console.log(req.body)
         console.log('reached')
       
        await registeruser(req.body).then((data)=>{
            const token = createtoken(data)
            console.log(token)
            res.cookie('jwt',token,{
                withCredentials:true,
                httpOnly:false,
                maxage:maxage * 1000
            });
            res.json({user:data,username:req.body.username,created:true})
            
        }).catch((er)=>{
            console.log(er)
            res.json({error:'email already registered',created:false})
        })
      
}

module.exports.login = async(req,res,next)=>{
    
        console.log(req.body)
        console.log('reached')
        await loginuser(req.body).then((data)=>{
            console.log(data)
            const token = createtoken(data._id)
            console.log(token)
            res.cookie('jwt',token,{
                withCredentials:true,
                httpOnly:false,
                maxage:maxage * 1000
            });
            res.json({user:data,login:true})
        }).catch((er)=>{
            console.log('ksksks')
            res.json({error:'no user found',login:false})
        })
    
  
}
module.exports.getuser = async(req,res,next)=>{
    console.log( res.userdetails.username )
    res.json({status:true,user:res.userdetails.username})
}



