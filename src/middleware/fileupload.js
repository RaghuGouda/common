const multer = require('multer')

const profileUpload = multer({
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){

        if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            return cb(new Error('invalid file format only'),false)
        }

        cb(undefined,true)
    }
})
module.exports ={profileUpload}