import bcrypt  from "bcrypt";
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET || "test-key";

async function generatePasswordHash(password:string){
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

async function  comparePassword(password:string, passwordHash:string){
    return bcrypt.compare(password, passwordHash);
}

function generateJwtToken(data:object, time:string){
    if (time) return jwt.sign(data,jwtSecret, { expiresIn: time });
    return jwt.sign(data,jwtSecret);
}

function verifyJwtToken(token:string){
    try {
        const data = jwt.verify(token, jwtSecret);
        return { validToken: true, data };
    } catch (error) {
        return { validToken: false };
    }
}

export {
    generatePasswordHash,
    comparePassword,
    generateJwtToken,
    verifyJwtToken
};