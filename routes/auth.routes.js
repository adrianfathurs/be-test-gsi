const express = require("express");
const router = express.Router();

const { authJwt } = require("../middleware");
const controllerAuth = require("../controllers/auth.controller");

router.post("/signin", controllerAuth.signin);

module.exports = router;
