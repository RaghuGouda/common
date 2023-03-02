const ObjectId = require('mongoose').Types.ObjectId;

const varifyId = async(id)=>{
    try {
        if (!ObjectId.isValid(id)){
            throw new Error('invaild id')
        }
        return true       
    } catch (error) {
        error.status = 400
        throw error     
    }
}
module.exports= varifyId
