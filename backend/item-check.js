var check = function(connection, res, id) {
	var  sql = 'SELECT * FROM websites WHERE id=' + id;
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