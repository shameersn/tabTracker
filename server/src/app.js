const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const { PORT } = require("./config/config");
const { sequelize } = require("./models");
const routes = require("./routes");
const {
  notFound,
  developmentErrors,
  productionErrors
} = require("./errorHandlers");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

app.use(notFound);

// catch and send errors
if (process.env.NODE_ENV === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(developmentErrors);
}

// production error handler
app.use(productionErrors);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Express app running on ${PORT}`);
  });
});
