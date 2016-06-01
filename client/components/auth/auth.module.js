'use strict';

angular.module('amitDemoApp.auth', [
  'amitDemoApp.constants',
  'amitDemoApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
