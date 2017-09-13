var getAll = require('./all-request');
var add = function(connection, res, param) {
	var  sql = 'INSERT INTO websites(id, name, url, alexa, country) VALUES(?,?,?,?,?)';
	var value = [param.id, param.name, param.url, param.alexa, param.country];
	connection.query(sql, value, function (err, result) {
	    if(err){
		    console.log('[SELECT ERROR] - ', err.message);
		    return;
	    }
	    console.log('add-result:', result);
	    getAll(res);
	    
	});
	//connection.end();
}
module.exports = add;
