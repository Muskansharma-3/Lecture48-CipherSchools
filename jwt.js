const jwt = require("jsonwebtoken");

const CS_SECRET_KEY = "CSSecretKey";

const generateToken = (payload) => {
    const token = jwt.sign(payload, CS_SECRET_KEY, { expiresIn: "1h" });
    return token;
}

const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, CS_SECRET_KEY);
        return { isValidToken: true, payload };
    } catch (error) {
        console.log(error);
        return { isValidToken: false, payload: undefined };
    }
}

module.exports = { generateToken, verifyToken };

// console.log(generateToken({ name: "Muskan" }));

// console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXVza2FuIiwiaWF0IjoxNzE5ODIyMTQ0fQ.Uv2J0JvnfZE687-KzS-5ZTVwohUvS3mBqq1T0FZSu3I"));