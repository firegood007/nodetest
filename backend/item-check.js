var check = function(connection, res, param) {
	var ParamStr = [];
	var value = [];
	for (var i in param) {
		if(param.hasOwnProperty(i) && param[i]) {
			ParamStr.push(i + '=?');
			value.push(param[i]);
		}
		
	}
	var str = ParamStr.join(' && ');
	var  sql = 'SELECT * FROM websites WHERE ' + str;
	connection.query(sql, value, function (err, result) {
	    if(err){
	      console.log('[SELECT ERROR] - ',err.message);
	      return;
	    }
	    res.send(JSON.stringify(result));
	    
	});
	//connection.end();
}
module.exports = check;