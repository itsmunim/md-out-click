angular.module('dropdownDemo', [
  'mdOutClick',
  'hljs'
]);

angular.module('dropdownDemo')
  .controller('HomeController', HomeController);

angular.module('dropdownDemo')
  .controller('ExampleController', ExampleController);

angular.module('dropdownDemo')
  .controller('SetupController', SetupController);


HomeController.$inject = ['$scope'];

function HomeController($scope) {
  $scope.routing = {
    current: '/',
    routes: {
      '/': 'www/home.html',
      '/examples': 'www/examples.html',
      '/setup': 'www/setup.html'
    },
    navigateTo: function (route) {
      this.current = route;
    }
  };
}


ExampleController.$inject = ['$scope'];

function ExampleController($scope) {
  $scope.examples = [
    {
      name: 'Dropdowns',
      templateUrl: 'www/dropdown.demo.html'
    },
    {
      name: 'Side Navigation',
      templateUrl: 'www/side.nav.demo.html'
    }
  ];

  $scope.selectedExampleIndex = 0;

  $scope.selectExample = function (index) {
    $scope.selectedExampleIndex = index;
    $scope.hideDropdown();
  };

  // dropdown specific
  $scope.isDropdownVisible = false;

  $scope.hideDropdown = function () {
    $scope.isDropdownVisible = false;
  };

  $scope.showDropdown = function () {
    $scope.isDropdownVisible = true;
  };
}


SetupController.$inject = ['$scope'];

function SetupController($scope) {

}
