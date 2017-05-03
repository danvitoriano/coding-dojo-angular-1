angular.module("alurapic")

       .controller('FotosController', function($scope) 
	       {
		   	  $scope.fotos = [{
				titulo : 'Leão',
				url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
			  },
			  {
				titulo : 'Leão',
				url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
			  },
			  {
				titulo : 'Leão',
				url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
			  }]
	       }
       );