'use strict';

var expect = require('chai').expect;
var day2 = require('./day2');

describe('day2', function () {
    describe('#calculateWrappingArea()', function () {
        it('should calculate total wrapping area', function () {
            expect(day2.calculateWrappingArea('2x3x4')).to.equal(58);
            expect(day2.calculateWrappingArea('1x1x10')).to.equal(43);
        });
    });

    describe('#calculateRibbonLength()', function () {
        it('should calculate total ribbon length', function () {
            expect(day2.calculateRibbonLength('2x3x4')).to.equal(34);
            expect(day2.calculateRibbonLength('1x1x10')).to.equal(14);
        });
    });
});
