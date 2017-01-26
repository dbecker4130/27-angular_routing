'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('GalleryController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('title property', () => {
    it('title should say this is the gallery', () => {
      expect(this.galleryCtrl.title).toBe('this is the gallery');
    });
  });
});
