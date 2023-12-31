"use strict";

var mongoose = require("mongoose");

var Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  msv: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
}, {
  timestamps: false
});

module.exports = mongoose.model("DB", Schema);
