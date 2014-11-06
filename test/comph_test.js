/*global describe,it*/
'use strict';
var assert = require('assert'),
	comph = require('../lib/comph.js');

describe('comph node module.', function() {
	it('must be awesome', function() {
		assert( comph.awesome(), 'awesome');
	});
});
