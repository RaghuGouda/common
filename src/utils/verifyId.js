const ObjectId = require('mongoose').Types.ObjectId;

const varifyId = async(id)=>{
    try {
        return ObjectId.isValid(id);    
    } catch (error) {
        throw new Error(error)  
    }
}
module.exports= varifyId
