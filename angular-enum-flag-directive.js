'use strict';

angular.module('enumFlag', []).directive('ngEnumFlag', function () {
    return {
        restrict: 'A',
        scope: {
            value: '=ngEnumFlag',
            model: '=ngEnumModel',
            bitwise: '=ngBitwise'
        },
        link: function (scope, element) {
            var checkbox = element[0];
            element.on('change', function () {
                scope.$apply(function () {
                    if (!scope.bitwise) {
                        if (checkbox.checked) {
                            scope.model = parseInt(scope.model) + parseInt(scope.value);
                        } else {
                            scope.model = parseInt(scope.model) - parseInt(scope.value);
                        }
                    } else {
                        if (checkbox.checked) {
                            scope.model = parseInt(scope.model) | parseInt(scope.value);
                        } else {
                            scope.model = parseInt(scope.model) &~ parseInt(scope.value);
                        }
                    }
                });
            });
            scope.$watch('model', function () {
                checkbox.checked = (scope.model & scope.value) == scope.value;
            });
        }
    };
});