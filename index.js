#!/usr/bin/env node
"use strict";
const Poker = require("./Poker");

module.exports.init = function() {
  console.log("here");
  const poker = new Poker();
  poker.readFile();
};
