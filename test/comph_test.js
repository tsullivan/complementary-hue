/*global describe,it*/
'use strict';
var assert = require('assert'),
	comph = require('../lib/comph.js');

describe('@P1@comph node module.', function() {
	it('must calculate complementary hue with valid input', function() {

		// valid numbers
		assert.equal(comph.complementaryHue(180), 0);
		assert.equal(comph.complementaryHue(0), 180);
		assert.equal(comph.complementaryHue(30), 210);

	});
});

describe('@P3@awesomeness', function() {
	it('must be awesome', function() {

		assert.equal(comph.awesome(), 'awesome');

	});
});
