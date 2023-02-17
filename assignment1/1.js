"use strict";
exports.__esModule = true;
var users_json_1 = require("./users.json");
users_json_1["default"].sort(function (a, b) { return a.username.localeCompare(b.username); });
console.log(users_json_1["default"]);
