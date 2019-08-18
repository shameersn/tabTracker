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

async function getSong(req, res) {
  const { songId } = req.params;
  const song = await Song.findOne({
    where: {
      id: songId
    }
  });

  res.status(200).json(song);
}

async function updateSong(req, res) {
  const { songId } = req.params;
  const song = await Song.update(req.body, {
    where: {
      id: songId
    }
  });

  res.status(200).json(song);
}

module.exports = {
  getSongs,
  createSong,
  getSong,
  updateSong
};
