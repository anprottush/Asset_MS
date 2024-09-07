const createHttpError = require("http-errors");
const isLoggedIn = async(req, res, next) => {
    try {
        const hasToken = req.cookies.authToken;
        if(!hasToken){
            throw createHttpError(401, 'No token, authorization denied');
        }
        
        next()
        
    } catch (error) {
        return next(error);
        
    }

}

module.exports = {isLoggedIn};