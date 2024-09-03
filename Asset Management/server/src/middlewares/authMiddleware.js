const createHttpError = require("http-errors");
const isLoggedIn = async(req, res, next) => {
    try {
        const hasToken = req.cookies.access_token;
        // if(!hasToken){
        //     throw createHttpError(401, "user not login");
        // }
        console.log(hasToken);
        
    } catch (error) {
        return next(error);
        
    }

}

module.exports = {isLoggedIn};