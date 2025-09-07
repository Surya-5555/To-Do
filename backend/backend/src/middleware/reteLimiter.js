import ratelimit from "../config/upstash.js"; 


const rateLimiter = async (req, res, next) => { // called in server.js // app.use(rateLimiter);
    try {
        const {success} = await ratelimit.limit("my-rate-limit") //1.41.45 
        if(!success){
            return res.status(429).json({
                message : "Too many requests, please try again later."
            })
        }
        next();
    } catch (error) {
        console.log("Rate Limiter Error:", error);
        next(error);
    }
}

export default rateLimiter;