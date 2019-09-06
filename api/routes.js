const Router = require("koa-router");
const router = new Router({
  sensitive: false,
  prefix: "/api"
});

router.get("/", ctx => {
  ctx.body = { message: "Api funcionando =)", success: true };
});

//Auth routes

router.post("/register", AuthController.register);

module.exports = router;
