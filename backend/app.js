const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const cors = require('cors')
const db = require('./connection')
const cookie = require('cookie-parser')

const { ObjectId } = require('mongodb')
const multer = require('multer')
const path = require('path');
const routes = require('./routes/Userroutes')
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(cookie())
app.use('/',routes)
const port = 5000
const maxage = 3*24*60*60
app.listen(port,()=>{
    console.log(`server is running in port ${port} `)
})
db.connect((er)=>{
    if(er){
        console.log(er)
    }
    else{
        console.log('db connected')
    }
})







