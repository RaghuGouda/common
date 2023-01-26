//exporting all middleware
const auth=require('./src/middleware/auth')
const profileUpload=require('./src/middleware/fileupload')
const validate=require('./src/middleware/validations')

//exporting all utils
const Response=require('./src/utils/Response')
const ResponseMessages=require('./src/utils/ResponseMessages')
const StatusCodes=require('./src/utils/StatusCodes')
const verifyOTP=require('./src/utils/verifyOtp')


module.exports ={auth,profileUpload,validate,Response,ResponseMessages,StatusCodes,verifyOTP}

