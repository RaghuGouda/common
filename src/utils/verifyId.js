const ObjectId = require('mongoose').Types.ObjectId;

const varifyId = async(req,res,next)=>{
    try {
        if (!ObjectId.isValid(req)){
            // return res.status(400).json({ error: 'invaild id' });
            throw new Error('invaild id')
        }
        next()     
    } catch (error) {
        error.status = 400
        res.status(400).send({error})     
    }
}
module.exports= varifyId
