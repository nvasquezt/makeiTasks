const { findOneUser } = require('../api/user/user.service');

const jsonwebtoken = require("jsonwebtoken");

/**
 *
 * @param {*} token
 * @returns
 */
async function isAuth(req,res,next){
  const authHeader = req.headers.authorization;
  if(!authHeader){
    return res.status(401).send("No token provided");
  }
  const token = authHeader.split(" ")[1];
  const payload = await verifyToken(token);
  if(!payload){
    return res.status(401).send("Invalid token");
  }
  const user = await findOneUser({username: payload.username});
  if(!user){
    return res.status(401).send("Invalid token");
  }
  req.user = user;
  next();
}

/**
 * Returns a decoded JWT token by the app's secret key.
 * @param {string} token - The JWT token to be verified.
 * @returns {object} - The decoded JWT token.
 */
async function verifyToken(token) {
    try {
        const payload = await jsonwebtoken.verify(token, 'xX/\(O.o)/\XxsecretCodexX/\(O.o)/\Xx');
        return payload;
    } catch (error) {
      return null;
    }
}

/**
 * Returns a JWT token by the app's secret key.
 * @param {string} payload  - The payload to be signed.
 * @returns {string} - The signed JWT token.
 */
function signToken(payload) {
  const token = jsonwebtoken.sign(payload, 'xX/\(O.o)/\XxsecretCodexX/\(O.o)/\Xx', { expiresIn: '2h' });
  return token;
}

module.exports = {
  signToken,
  verifyToken,
  isAuth,
};
