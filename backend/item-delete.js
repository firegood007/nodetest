var getAll = require('./all-request');
var del = function(connection, res, id) {
	var  sql = 'DELETE FROM websites where id=' + id;
	connection.query(sql, function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }   
	    getAll(res);
	    
	});
	//connection.end();
}
module.exports = del;
