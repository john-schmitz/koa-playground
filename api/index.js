const Router = require("koa-router");
const router = new Router({
  sensitive: false,
  prefix: "/api"
});

router.get("/", ctx => {
  ctx.body = { message: "Api funcionando =)", success: true };
});

module.exports = router;
