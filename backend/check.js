var check = function(connection, res) {
	var  sql = 'SELECT * FROM websites';
	connection.query(sql, function (err, result) {
	    if(err){
	      console.log('[SELECT ERROR] - ',err.message);
	      return;
	    }
	    res.end(JSON.stringify(result));
	    
	});
	//connection.end();
}
module.exports = check;