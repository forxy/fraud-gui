'use strict';

angular.module('directives.date-time-picker', [])

  .directive('dateTimePicker', function () {
    return {
      require: '?ngModel',
      restrict: 'AE',
      scope: {
        pick12HourFormat: '@',
        language: '@',
        useCurrent: '@',
        location: '@'
      },
      link: function ($scope, elem, attrs) {
        elem.datetimepicker({
          pick12HourFormat: $scope.pick12HourFormat,
          language: $scope.language,
          useCurrent: $scope.useCurrent
        });

        elem.on('blur', function () {
          $scope.dateTime = new Date(elem.data("DateTimePicker").getDate().format());
        })
      }
    };
  });
