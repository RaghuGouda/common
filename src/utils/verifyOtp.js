import speakeasy from 'speakeasy'

const verifyOTP = async(secret_key,otp)=>{
    try {
        const tokenValidates = speakeasy.totp.verify({
            secret: secret_key,
            encoding: 'base32',
            token: otp,
            window:2
        });
        return tokenValidates        
    } catch (error) {
        throw new Error(error)     
    }
}

module.exports ={verifyOTP}