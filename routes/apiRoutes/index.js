const router = require('express').Router();
// const noteRoutes = require('./noteRoutes');

const routes = require("../apiRoutes/noteRoutes");

router.use(routes);

module.exports = router;