const jwt = require("jsonwebtoken");

class TokenService {
  constructor(jwtConfig) {
    this.jwtConfig = jwtConfig;
  }

  // Verify token using secret
  verify = (token) => jwt.verify(token, this.jwtConfig.secret);

  // Sign and create jwt token
  sign = (data) =>
    jwt.sign(data, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.expiresIn,
    });
}

module.exports = TokenService;
