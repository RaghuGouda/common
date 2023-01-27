const jwt = require('jsonwebtoken')

const auth = async(req,res,next)=>{
    try {
        const token =await req.header('Authorization').replace('Bearer ','')
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const decoded =jwt.verify(token,process.env.JWT_SECRET) //extracting user id from token 
        req.token = token
        req.decoded = decoded
        next()
    } catch (err) {
        res.status(401).send('Unauthorized')      
    }
}

module.exports =auth