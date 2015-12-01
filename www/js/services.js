angular.module('pfj.services', [])

.service("ImageSearch", function($http) {

	return {
		getImages:function(term) {
			var appid = "fgQ7ve/sV/eB3NN/+fDK9ohhRWj1z1us4eIbidcsTBM";
			$http.defaults.headers.common['Authorization'] = 'Basic ' + btoa(appid + ':' + appid);
			return $http.get("https://api.datamarket.azure.com/Bing/Search/v1/Image?$format=json&Query='"+escape(term)+"'&$top=10");
		}
	};

});
