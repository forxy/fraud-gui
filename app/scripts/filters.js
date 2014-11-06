'use strict';

angular.module('filters', [])

  .filter('exclude', function () {
    return function (input, exclude) {
      if (!exclude) {
        return input;
      }
      return input.filter(function (item) {
        return exclude.indexOf(item) === -1;
      });
    };
  })
  .filter('period', function() {
    return function(input) {
      return msToTime(input)
    };
  });
