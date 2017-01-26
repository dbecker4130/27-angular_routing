'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('SignupController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('title property', () => {
    it('title should say this is the signup', () => {
      expect(this.signupCtrl.title).toBe('this is the signup');
    });
  });
});
