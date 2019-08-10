const express = require("express");
const router = express.Router();

const { catchErrors } = require("../errorHandlers");
const { register } = require("../controller/auth.controller");

router.post("/register", catchErrors(register));

module.exports = router;
