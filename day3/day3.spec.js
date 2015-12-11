'use strict';

var expect = require('chai').expect;
var day3 = require('./day3');

describe('day3', function () {
    describe('#countHouses()', function () {
        it('should count how many houses received at least one present', function () {
            expect(day3.countHouses('>')).to.equal(2);
            expect(day3.countHouses('^>v<')).to.equal(4);
            expect(day3.countHouses('^v^v^v^v^v')).to.equal(2);
        });
    });
    
    describe('#countHousesWithRobot()', function () {
        it('should count how many houses received at least one present, with two santas', function () {
            expect(day3.countHousesWithRobot('^v')).to.equal(3);
            expect(day3.countHousesWithRobot('^>v<')).to.equal(3);
            expect(day3.countHousesWithRobot('^v^v^v^v^v')).to.equal(11);
        });
    });
});
