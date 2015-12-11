'use strict';

var expect = require('chai').expect;
var day2 = require('./day2');

describe('day2', function () {
    describe('#calculate_wrapping_area()', function () {
        it('should calculate total wrapping area', function () {
            expect(day2.calculate_wrapping_area('2x3x4')).to.equal(58);
            expect(day2.calculate_wrapping_area('1x1x10')).to.equal(43);
        });
    });
});
