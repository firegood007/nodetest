var express = require('express');
var app = express();
var dirnam = __dirname.lastIndexOf('\\');
dirnam = __dirname.slice(0, dirnam);
app.use(express.static(dirnam + '/fontend'));
module.exports = app;