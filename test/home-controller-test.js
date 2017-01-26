'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('HomeController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('title property', () => {
    it('title should say welcome home', () => {
      expect(this.homeCtrl.title).toBe('welcome home');
    });
  });
});
