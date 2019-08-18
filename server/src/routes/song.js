const express = require("express");
const router = express.Router();

const { catchErrors } = require("../errorHandlers");
const {
  getSongs,
  createSong,
  getSong,
  updateSong
} = require("../controller/song.controller");

router
  .get("/", catchErrors(getSongs))
  .post("/", catchErrors(createSong))
  .put("/:songId", catchErrors(updateSong))
  .get("/:songId", catchErrors(getSong));

module.exports = router;
