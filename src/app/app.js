
angular.module( 'ngBoilerplateShop', [
  'templates-app',
  'templates-common',
  'ngbps.home',
  'ngbps.admin',
  'ngbps.shoppingGateway',
  'shoppingCart',
  'checkout',
  'ui.router'
])

.config( function checkoutConfig ( CheckoutProvider ) {
  CheckoutProvider.gateway('');
  CheckoutProvider.costs({});
})

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplateShop' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;
