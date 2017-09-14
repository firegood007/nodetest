var connection = require('./sql');
var app = require('./server');
var bodyParser = require('body-parser');

var url = require('url');

app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
  extended: true
}));

var check = require('./all-check');
var checkItem = require('./item-check');
var addItem = require('./item-add');
var del = require('./item-delete');
var updateItem = require('./item-update');
var sortItem = require('./item-sort');

connection.connect();

app.get('' ,function(req, res) {
	var dirnam = __dirname.lastIndexOf('\\');
	dirnam = __dirname.slice(0, dirnam);
	res.sendFile(dirnam + '/fontend/index.html');
});
app.get('/testData' ,function(req, res) {
	check(connection, res);
});
app.get('/checkItem', function(req, res) {
	var param = req.query;
	console.log(param, '3333333333333333333');
	checkItem(connection, res, param);
});
app.post('/addItem', function(req, res) {
	var param = req.body;
	addItem(connection, res, param);

});
app.post('/deleteItem', function(req, res) {
	var id = req.body.id;
	del(connection, res, id);

});
app.post('/updateItem', function(req, res) {
	var param = req.body;
	updateItem(connection, res, param);

});
app.get('/sortItem', function(req, res) {
	var type = req.query.type;
	sortItem(connection, res, type);

});
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
});
