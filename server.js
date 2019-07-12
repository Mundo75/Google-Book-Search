const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds351107.mlab.com:51107/heroku_vgv0t32m", {
  useNewUrlParser: true
}, error => {
  if(error) {
    console.log(error);
  } else {
    console.log("connected to the database");
  }
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});