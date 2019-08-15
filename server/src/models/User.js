const bcrypt = require("bcrypt");
const saltRounds = 10;

function hashPassword(user) {
  if (!user.changed("password")) {
    return;
  }

  return bcrypt.hash(user.password, saltRounds).then(hash => {
    console.log(hash);
    user.password = hash;
  });
}

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    {
      hooks: {
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  );

  user.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  return user;
};
