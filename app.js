const Koa = require("koa");
const router = require("./api");
const config = require("./config");
const applyMidleware = require("./util/applyMidleware");
const middlewareList = require("./middleware");
const app = new Koa();

applyMidleware(app, middlewareList);

app.use(router.routes());
app.use(router.allowedMethods());

app.on("error", err => {
  console.log(err);
});

const server = app.listen(config.port);

console.log(`Servidor rodando na porta ${config.port}`);

module.exports = server;
