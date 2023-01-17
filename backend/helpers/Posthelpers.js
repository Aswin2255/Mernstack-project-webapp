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
module.exports.editposthelper = async(post)=>{
    return new Promise(async(resolve, reject) => {
      let postt =   await db.get().collection(collection.postcollection). 
      findOneAndUpdate({_id:ObjectId(post.id)},{$set:{post:post.post}})
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
        if(deletepost.value){
            resolve('post deleted')
        }
        else{
            reject('post error')
        }
        
    })
}