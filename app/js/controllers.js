'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($rootScope, adaptService) {
        var device = adaptService.getDevice();
        // update the layouts array.  This includes the correct layout for the device/browser size.
        $rootScope.mainLayouts["MyCtrl1"] = "partials/adaptPartial" + device + ".html";
  })
  .controller('MyCtrl2', [function() {

  }]);