import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET || "test-key";
/**
 * generate bcrypt hash the password.
 * @param {String} password 
 * @returns {String}
 */
async function generatePasswordHash(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * compare given password and password hash.
 * @param password 
 * @param passwordHash 
 * @returns {Boolean}
 */
async function comparePassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

/**
 * generate jwt token 
 * @param {Object} data 
 * @param {String} time 
 * @returns {String}
 */
function generateJwtToken(data: object, time: string) {
  if (time) return jwt.sign(data, jwtSecret, { expiresIn: time });
  return jwt.sign(data, jwtSecret);
}
/**
 * verify jwt token
 * @param {String} token 
 * @returns {Object}
 */
function verifyJwtToken(token: string) {
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
  verifyJwtToken,
};
