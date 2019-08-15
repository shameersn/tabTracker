module.exports = {
  PORT: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || "tabtracker",
    username: process.env.DB_USER_NAME || "tabtracker",
    password: process.env.DB_PASSWORD || "tabtracker123",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./tabtracker.sqlite"
    }
  },
  jwt_secret: process.env.JWT_SECRET || "jwt_secret"
};
