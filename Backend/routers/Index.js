const express = require('express')
const router = express.Router()
const user = require("./users/user")
const ragister = require("./Ragister/Index");




router.use('/user',user);
router.use('/',ragister);

module.exports = router
