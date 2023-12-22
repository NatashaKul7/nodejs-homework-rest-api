const express = require("express");

const controllers = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middleWares");
const { registerSchema, loginSchema } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(registerSchema), controllers.register);

router.post("/login", validateBody(loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

module.exports = router;
