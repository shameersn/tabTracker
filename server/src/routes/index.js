const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const songRouter = require("./song");

router.use("/auth", authRouter);
router.use("/song", songRouter);

module.exports = router;
