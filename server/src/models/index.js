const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const { db } = require("../config/config");

const DB = {};
const sequelize = new Sequelize(
  db.database,
  db.username,
  db.password,
  db.options
);

fs.readdirSync(__dirname)
  .filter(file => file !== "index.js")
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    DB[model.name] = model;
  });

DB.sequelize = sequelize;
DB.Sequelize = Sequelize;

module.exports = DB;
