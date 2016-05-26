'use strict';

describe('mainCtrl', function() {

  var controller, scope;

  beforeEach(module("trelloGrindApp"));
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('mainCtrl', {
      $scope: scope
    });
  }));
});


