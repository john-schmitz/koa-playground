const { User } = require("../models");

module.exports = {
  async register(ctx) {
    const body = ctx.request.body;
    const user = await User.create(body);
    ctx.response.status = 201;
    ctx.body = {
      token: user.generateToken(),
      user
    };
  }
};
