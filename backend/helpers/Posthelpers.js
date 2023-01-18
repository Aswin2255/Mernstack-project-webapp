const db = require('../connection')
const collection = require('../collection')
const { ObjectId, ObjectID } = require('mongodb')
const { post } = require('../routes/Userroutes')

module.exports.createposthelper = async (post)=>{
    return new Promise(async(resolve, reject) => {
        await db.get().collection(collection.postcollection).insertOne(post).then((data)=>{
            resolve('post created')
        }).catch((er)=>{
            reject('post creation failed')
        })
    })

}
module.exports.getuserposthelper = async(userid)=>{
    console.log(userid)
    return new Promise(async(resolve, reject) => {
        let post = await db.get().collection(collection.postcollection).find({userid:ObjectID(userid)}).toArray()
        resolve(post)

    })
}
module.exports.editposthelper = async(post)=>{
    
    return new Promise(async(resolve, reject) => {
      console.log(post)
      let postt = await db.get().collection(collection.postcollection).findOneAndUpdate({_id:ObjectID(post.post.postid),userid:ObjectID(post.userid)},{$set:{post:post.post.post}})
      console.log(postt)
      if(postt.value){
        resolve('post edited')
      }
      else{
        reject('post error')
      }
      
        
    })
}
module.exports.deleteposthelper = async(postid)=>{
    return new Promise(async(resolve, reject) => {
        let deletepost = await db.get().collection(collection.postcollection).findOneAndDelete({_id:ObjectID(postid)})
        console.log(deletepost)
        if(deletepost.value){
            let post = await db.get().collection(collection.postcollection).find({userid:ObjectId(deletepost.value._id)}).toArray()
            resolve(post)
        }
        else{
            reject('post error')
        }
        
    })
}