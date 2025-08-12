require('dotenv').config();


const config = {
    port: process.env.port || 8000,
    accesTokenSecret: process.env.ACCESS_TOKEN_SECRET || 8000,
    nodeENV: process.env.MONGOOB_URI,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accesTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
    cloudinary:{
        cloudname: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    corsOrigin: process.env.CORS_ORIGIN,


};

module.exports = config;