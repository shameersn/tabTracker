const PORT = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  res.send({ message: `Hello there ${req.body.email}` });
});

app.use("**", (req, res) => {
  res.json(`Server is up ${new Date()}`);
});

app.listen(PORT, () => {
  console.log(`Express app running on ${PORT}`);
});
