var http = require('http');
var getAll = function(res) {
	http.get('http://localhost:8081/testData', function(data) {
		var re = '';
		data.on('data',function(s) {
			re += s;
		})
		data.on('end',function(s) {
			res.send(JSON.parse(re));
		})
		
	})
}
module.exports = getAll;
