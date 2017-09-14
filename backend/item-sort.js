var check = function(connection, res, type) {
	console.log(type, '123123213')
	var  sql = 'SELECT * FROM websites ORDER BY id ' + type;
	connection.query(sql, function (err, result) {
	    if(err){
	      console.log('[SELECT ERROR] - ',err.message);
	      return;
	    }
	    res.send(JSON.stringify(result));
	    
	});
	//connection.end();
}
module.exports = check;