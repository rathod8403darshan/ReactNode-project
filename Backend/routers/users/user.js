const express = require('express')
const { getData,AddData, deleteData, updateData } = require('../../controller/usercontroller')
const router = express.Router()
const multer  = require('multer')

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
  

router.get('/',getData);
router.post('/',upload.single('image'),AddData);
router.delete('/:id',deleteData);
router.patch('/:id',upload.single('image'),updateData);

module.exports = router
