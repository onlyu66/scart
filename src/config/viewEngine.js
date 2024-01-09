const express = require("express"); // common js
const path = require("path");
const configViewEngine = (app) => {
  app.set("view engine", "ejs");
  app.set("views", path.join("./src", "views"));
  // config static files: img/css/js
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
