/* globals describe:false, it:false */
var runExample = require('../example/comph_example'),
	assert = require('assert');

describe('@P2@example code', function () {
	it ('must calculate and return an expected string', function () {
		var result = runExample(30);
		assert.equal(result, 'Given an input hue of 30, the complementary hue is 210');
	});
});
