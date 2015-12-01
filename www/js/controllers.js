angular.module('pfj.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

//Home Controller
.controller('HomeCtrl', function($scope, ImageSearch, $ionicSlideBoxDelegate) {
  $scope.images = [];

  /*
	$scope.doSearch = function() {
		ImageSearch.getImages('cats').then(function(results) {
			$scope.images = results.data.d.results;
			setTimeout(function() {
				$ionicSlideBoxDelegate.slide(0);
				$ionicSlideBoxDelegate.update();
				$scope.$apply();
			});
		});
	};
  */

  $scope.images = [
    { title: 'Sweden', id: 1, url: 'http://wowslider.com/sliders/demo-5/data/images/sweden.jpg'},
    { title: 'Balloon', id: 2, url: 'http://www.menucool.com/slider/prod/image-slider-2.jpg'},
    { title: 'Beach', id: 3, url: 'http://www.jssor.com/demos/img/home/03.jpg'},
    { title: 'Lakeview', id: 4, url: 'http://demo.smartaddons.com/extensions/joomla17/cache/mod_sj_content_slider/9255c842486894114896cc6b8a92714f.jpeg'}
  ];

  $scope.products = [
    { title: 'Product 1', id: 1, url: 'http://luxemi.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/-/p-10-a-y_brocade_salwar_1.jpg'},
    { title: 'Product 2', id: 2, url: 'https://samyakkclothing.files.wordpress.com/2013/07/salwar-dhamaka.jpg'},
    { title: 'Product 3', id: 3, url: 'http://stat.homeshop18.com/homeshop18/images/productImages/267/jaipur-kurti-womens-salwar-dupatta-set-magenta-free-size-300X420-5X7-38d9da5a00c44609ad3addd9823e0c74.jpg'},
    { title: 'Product 4', id: 4, url: 'http://luxemi.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/-/p-12-a-y_brocade_salwar_1.jpg'},
    { title: 'Product 5', id: 5, url: 'http://www.indianclothstore.com/productimages/black-full-sleeve-net-long-anarkali-salwar-kameez-15572.jpg'}
  ];


});
