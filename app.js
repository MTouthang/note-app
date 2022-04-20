// imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

// imports routes ..
const noteRoutes = require("./routes/note");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", noteRoutes);

// DB connection...
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(`${err}: DB not connected!`));

// port config...
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Note app listening on port ${PORT}`);
});
