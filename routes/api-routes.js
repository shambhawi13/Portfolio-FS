var db = require("../models");
var moment = require('moment'); // require
var sendMail = require("../config/mail");

var currentDate = moment().startOf('day').hour(12);

module.exports = function (app) {

};