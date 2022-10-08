const { authJwt } = require("../middlewares");
const controller = require("../controllers/provider");

module.exports = function(app) {
  
  app.get("/api/provider/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.getProviders]);

  app.get("/api/provider/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.getProvidersById]);

  app.put("/api/provider/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.updateProvider]);

  app.delete("/api/provider/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteProvider]);

  app.delete("/api/provider/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteAllProviders);
  
};