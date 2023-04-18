const jwt = require("jsonwebtoken");
const SecretJwt = process.env.SECRET_JWT;

verifyTokenAdmin = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
        message: "No token provided!",
        });
    }

    jwt.verify(token, SecretJwt, (err, decoded) => {
        if (err || !decoded.isAdmin) {
            return res.status(401).send({
                message: "Unauthorized!",
            });
        }
        req.userId = decoded.id;
        next();
    });
};

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
        message: "No token provided!",
        });
}

    jwt.verify(token, SecretJwt, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!",
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken,
    verifyTokenAdmin,
};

module.exports = authJwt;
