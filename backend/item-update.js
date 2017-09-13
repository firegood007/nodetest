var getAll = require('./all-request');
var update = function(connection, res, param) {
	var  sql = 'UPDATE websites SET name = ?, url = ?, alexa = ?, country = ? WHERE Id = ?';
	var value = [param.name, param.url, param.alexa, param.country, param.id];
	connection.query(sql, value, function (err, result) {
	    if(err){
	      	console.log('[SELECT ERROR] - ', err.message);
	      	return;
	    }
	    getAll(res);
	    
	});
	//connection.end();
}
module.exports = update;
