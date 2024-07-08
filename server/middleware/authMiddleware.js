import jwt from "jsonwebtoken"

const authenticateJWT = (req, res, next) => {
    console.log("authencticatejwt")
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: "Please Login" });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user; // Attach user information to request object
        next();
    } catch (error) {
        console.error("JWT verification failed:", error);
        res.status(403).json({ msg: "Session expired or invalid token, please log in again" });
    }
};

module.exports = authenticateJWT;
