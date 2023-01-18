const { createpost, editpost, deleteposth, getpost, getuserpost } = require('../controllers/Postcontrollers')
const { register, login, getuser } = require('../controllers/Usercontrollers')
const { Verifyuser } = require('../middlewares/usermiddlewares')

const router = require('express').Router()
router.post('/signup',register)
router.post('/login',login)
router.post('/getpost',Verifyuser,getuserpost)
router.post('/createpost',Verifyuser,createpost)
router.post('/editpost',Verifyuser,editpost)
router.post('/deletepost',Verifyuser,deleteposth)
router.post('/getuser',Verifyuser,getuser)
module.exports = router

