'use strict';

describe('Controller: MyspaceCtrl', function () {

  // load the controller's module
  beforeEach(module('mySeatingChartApp'));

  var MyspaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyspaceCtrl = $controller('MyspaceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyspaceCtrl.awesomeThings.length).toBe(3);
  });
});
