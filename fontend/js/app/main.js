var app = angular.module('app', []);

app.controller('index-ctr', ['$scope', '$http', function($scope, $http){
	$http.get('/testData')
	.success(function(data) {
		$scope.items = data;
	})
	.error(function() {
		console.log('fail')
	})
}])