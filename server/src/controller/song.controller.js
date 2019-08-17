const { Song } = require("../models");

async function getSongs(req, res) {
  const songs = await Song.findAll({
    limit: 10
  });

  res.status(200).json(songs);
}

async function createSong(req, res) {
  const song = await Song.create(req.body);

  res.status(201).json(song);
}

module.exports = {
  getSongs,
  createSong
};
