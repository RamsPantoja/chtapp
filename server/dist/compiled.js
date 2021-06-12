"use strict";

var _express = _interopRequireDefault(require("express"));

var _socket = _interopRequireDefault(require("socket.io"));

var _http = require("http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var httpServer = (0, _http.createServer)(app);
var io = (0, _socket["default"])(httpServer);
app.listen(5200, function () {
  return console.log('Server is running on port: 52002');
});
