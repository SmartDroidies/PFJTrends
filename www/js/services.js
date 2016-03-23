angular.module('pfj.services', [])

.service("Products", function($http) {

	return {
		getProducts:function() {
			return $http.get("http://smartdroidies.com/pfj/products.php");
		}
	};

});
