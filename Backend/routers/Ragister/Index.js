const express = require('express')
const router = express.Router()
const multer  = require('multer')
const { GetragisterData, AddRagisterData, LoginData } = require('../../controller/ragisterController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
     
        req.body.image = file.originalname
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  

router.get('/ragister',GetragisterData);
router.post('/ragister',upload.single('userImage'),AddRagisterData);
router.post('/login',upload.single('userImage'),LoginData);

module.exports = router
