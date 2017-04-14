(function(){
  'use strict';

  angular.module('finnFuglen', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router']);

  angular.module('finnFuglen').config(function($stateProvider) {
    $stateProvider.state(
      'egenskaper', {
        url: '/:rygg,:vinge,:mage,:hode,:storrelse,:beinlengde',
        controller: 'fuglCtrl'
      }
    );
  });
}());
