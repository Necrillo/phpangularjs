var app = angular.module('app',[])
 
app.controller('titulo',['$scope',function($scope){
	$scope.appTitulo = 'Carrito de compras';
}]);

app.controller('ExpensesViewController',['$scope',function($scope){
	$scope.expenses = [
		{description: 'food', amount: 10, date: '01-10-2014'},
		{description: 'tickets', amount: 11, date: '02-10-2014'},
		{description: 'food', amount: 12, date: '03-10-2014'},
		{description: 'phone credit', amount: 13, date: '04-10-2014'},
		{description: 'bills', amount: 14, date: '05-10-2014'},
		{description: 'food', amount: 15, date: '06-10-2014'},
	]
}]);