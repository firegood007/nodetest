var app = angular.module('app', []);

app.controller('index-ctr', ['$scope', '$http', function($scope, $http){
	$scope.checkId = '';
	$scope.test = 1;
	$scope.correlateTest = $scope.test + 1;
	$http.get('/testData')
	.success(function(data) {
		$scope.items = data;
	})
	.error(function() {
		console.log('fail')
	})
	$scope.checkout = function() {
		$http({
			url: '/checkItem',
			params: {id: $scope.checkId},
			method: 'get'
		}).success(function(res) {
			$scope.items = res;
			$scope.test = 10;
		}).error(function(err) {
			console.log(err);
		});
	}
	$scope.add = function() {
		var param = {
			id: $scope.addId,
			name: $scope.addName,
			url: $scope.addWeb,
			alexa: $scope.addNum,
			country: $scope.addCountry
		};
		$http.post('/addItem', param).success(function(data) {
			$scope.items = data;
			$scope.addId = '';
			$scope.addName = '';
			$scope.addWeb = '';
			$scope.addNum = '';
			$scope.addCountry = '';
			angular.element('.js-upAdd').focus();
		}).error(function() {
			console.log('fail');
		})
	};
	$scope.update = function() {
		var param = {
			id: $scope.updateId,
			name: $scope.updateName,
			url: $scope.updateWeb,
			alexa: $scope.updateNum,
			country: $scope.updateCountry
		};
		$http.post('/updateItem', param).success(function(data) {
			$scope.items = data;
			$scope.updateId = '';
			$scope.updateName = '';
			$scope.updateWeb = '';
			$scope.updateNum = '';
			$scope.updateCountry = '';
			angular.element('.js-upDate').focus();
		}).error(function() {
			console.log('fail');
		})
	};
	$scope.delete = function(id) {
		var param = {id: id}
		$http.post('/deleteItem', param).success(function(data) {
			$scope.items = data;
		}).error(function() {
			console.log('fail');
		})
	}
}])