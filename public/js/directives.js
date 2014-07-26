'use strict';

/* Directives */


angular.module('BatallaKamikaze.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);