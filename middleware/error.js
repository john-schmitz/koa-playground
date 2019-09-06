const errorMiddleware = async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { message: err.message };
    ctx.app.emit("error", err, ctx);
  }
};

const applyError = function(app) {
  app.use(errorMiddleware);
};

module.exports = applyError;
