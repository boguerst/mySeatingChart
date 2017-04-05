'use strict';

describe('Controller: HowitworkCtrl', function () {

  // load the controller's module
  beforeEach(module('mySeatingChartApp'));

  var HowitworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HowitworkCtrl = $controller('HowitworkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HowitworkCtrl.awesomeThings.length).toBe(3);
  });
});
