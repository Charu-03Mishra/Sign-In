// routers/sign.js
const express = require("express");
const router = express.Router();
const { register, login, logout, home, signup, log } = require("../controller/user-controller");

const{proteced} = require("../middelware/proteced");

// Define routes
router.get("/", home);
router.get("/sign", register);
router.post("/sign", signup);
router.get("/login", login);
router.post("/login", log);

router.get("/logout", logout);

module.exports = router;
