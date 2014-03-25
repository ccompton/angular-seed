'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('adapt', function ($rootScope, $window, adaptService) {
        // The adapt directive is used to check the browser size and include the correct markup for a given device/browser size.
        // This allows you to control what markup loads for any given device/browser size.
        // It also adds and updates a few size vars on the root scope so they can be accessed in templates and throughout the application.
        return function (scope) {
            // call method on browser resize
            angular.element($window).bind('resize', function () {
                // add the browser window width and height to the root scope
                $rootScope.width = $window.innerWidth;
                $rootScope.height = $window.innerHeight;
                scope.$apply(function () {
                    // get the device from the adapt service
                    var device = adaptService.getDevice();
                    // swap out the the includes for the current device
                    angular.forEach($rootScope.mainLayouts, function (mainLayout, key) {
                        if (mainLayout && mainLayout.indexOf("_") !== -1) {
                            var layoutName = mainLayout.split("_")[0];
                            // update the layouts array.  This includes the correct layout for the device/browser size.
                            $rootScope.mainLayouts[key] = layoutName + device + ".html";
                        }
                    });// end foreach
                });
            });
        };
    });
