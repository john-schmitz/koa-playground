const applyMidleware = function(app, middlewareList) {
  for (const middleware of middlewareList) {
    middleware(app);
  }
};

module.exports = applyMidleware;
