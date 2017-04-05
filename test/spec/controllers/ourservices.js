'use strict';

describe('Controller: OurservicesCtrl', function () {

  // load the controller's module
  beforeEach(module('mySeatingChartApp'));

  var OurservicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OurservicesCtrl = $controller('OurservicesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OurservicesCtrl.awesomeThings.length).toBe(3);
  });
});
