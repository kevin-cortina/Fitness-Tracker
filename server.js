
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

// Instantiate our app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./api"));
app.use(require("./html"));

//application is listening to set port or 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//connection established
module.exports = mongoose.connection