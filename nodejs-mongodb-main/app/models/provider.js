const mongoose = require("mongoose");

const Provider = mongoose.model(
  "Provider",
  new mongoose.Schema({
    name: String,
    code: String,
    telefono: String
  })
);

module.exports = Provider;