const jwt = require("jsonwebtoken");

class TokenService {
  constructor(jwtConfig) {
    this.jwtConfig = jwtConfig;
  }

  verify = (token) => jwt.verify(token, this.jwtConfig.secret);
  sign = (data) =>
    jwt.sign(data, this.jwtConfig.secret, {
      expiresIn: this.jwtConfig.expiresIn,
    });
}

module.exports = TokenService;
