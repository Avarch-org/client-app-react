const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");

routes.add("peers", "/peers");
routes.add("latest-slots", "/latest-slots");
routes.add("all-validators", "/all-validators");
routes.add("epochs", "/epochs");
// routes.add("validator", "/validator/:key");
routes.add("pending-validators", "/pending-validators/:key");
// routes.add("epoch", "/epoch/:key");
// routes.add("slot", "/slot/:key");
routes.add("reward", "/reward");
routes.add("under-maintenance", "/reward");
routes.add("resources", "/resources");

