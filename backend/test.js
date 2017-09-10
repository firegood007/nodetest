var connection = require('./sql');
var app = require('./server');
var check = require('./check');
connection.connect();
app.get('' ,function(req, res) {
	var dirnam = __dirname.lastIndexOf('\\');
	dirnam = __dirname.slice(0, dirnam);
	res.sendFile(dirnam + '/fontend/index.html');
})
app.get('/testData' ,function(req, res) {
	check(connection, res);
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})