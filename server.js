const express = require("express");
const mongoose = require("mongoose")
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;

// const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
