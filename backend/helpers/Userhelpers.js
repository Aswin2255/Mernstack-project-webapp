const db = require('../connection')
const collection = require('../collection')
const bcrypt = require('bcrypt')

module.exports.registeruser = async (userdetails) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.get().collection(collection.usercollection).findOne({ email: userdetails.email })
        console.log(user)
        if (user) {
            reject('user exist')
        }
        else {
            userdetails.pass = await bcrypt.hash(userdetails.pass, 10)
            await db.get().collection(collection.usercollection).insertOne(userdetails).then((data) => {
                let insertedid = data.insertedId
                resolve(insertedid)
            })
        }

        // await db.get().collection(collection.usercollection).insertOne()
    })
}

module.exports.loginuser = async (userdetails) => {

    return new Promise(async (resolve, reject) => {
        let user = await db.get().collection(collection.usercollection).findOne({ email: userdetails.email })
        console.log('reachedxxxxxx')
        console.log(user)
        if (user) {
            bcrypt.compare(userdetails.pass, user.pass).then((status) => {
                if (status) {
                    resolve(user)
                }
                else {

                    console.log("failed")
                    reject('user not found')
                }
            })

        }
        else {
            reject('user not found')
        }
    })
}
