const express = require("express");
const router = express.Router();

const { catchErrors } = require("../errorHandlers");
const { getSongs, createSong } = require("../controller/song.controller");

router.get("/", catchErrors(getSongs))
  .post("/", catchErrors(createSong));

module.exports = router;
