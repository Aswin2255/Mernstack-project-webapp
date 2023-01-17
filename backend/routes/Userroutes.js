const { createpost, editpost, deleteposth } = require('../controllers/Postcontrollers')
const { register, login } = require('../controllers/Usercontrollers')
const { Verifyuser } = require('../middlewares/usermiddlewares')

const router = require('express').Router()
router.post('/signup',register)
router.post('/login',login)
router.post('/createpost',Verifyuser,createpost)
router.post('/editpost',Verifyuser,editpost)
router.post('/deletepost',Verifyuser,deleteposth)
module.exports = router

