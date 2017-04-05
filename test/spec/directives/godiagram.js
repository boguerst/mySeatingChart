'use strict';

describe('Directive: goDiagram', function () {

  // load the directive's module
  beforeEach(module('mySeatingChartApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<go-diagram></go-diagram>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the goDiagram directive');
  }));
});
