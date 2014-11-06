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

		// number as a string
		assert.equal(comph.complementaryHue('30'), 210);

	});

	it('must return undefined for non-numeric', function() {

		// non-valid numbers
		assert.equal(comph.complementaryHue(), undefined);
		assert.equal(comph.complementaryHue('.'), undefined);
		assert.equal(comph.complementaryHue(null), undefined);
		assert.equal(comph.complementaryHue({}), undefined);

	});
});

describe('@P3@awesomeness', function() {
	it('must be awesome', function() {

		assert.equal(comph.awesome(), 'awesome');

	});
});
