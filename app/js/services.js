'use strict';

/* Services */


var module = angular.module('myApp.services', []);

// Demonstrate how to register services
// In this case it is a simple value service.

module.value('version', '0.1');

// service to get the browser width/height and set the device type _d = desktop, _t = tablet , _m = mobile
module.service('adaptService', function ($window, $rootScope) {
    return{
        getDevice: function () {
            var width = $window.innerWidth;
            var height = $window.innerHeight;
            // add the browser window width and height to the root scope
            $rootScope.width = width;
            $rootScope.height = height;
            //_d = desktop, _t = tablet , _m = mobile
            //  you can adjust the 767
            var device = "_m";
            if (width <= 767) {
                device = "_m";
            } else if (width <= 979) {
                device = "_t";
            } else {
                device = "_d";
            }
            // set the device info in the root scope
            $rootScope.device = device;
            return device;
        }
    }
});
