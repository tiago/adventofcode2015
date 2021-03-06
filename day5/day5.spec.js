'use strict';

var expect = require('chai').expect;
var day5 = require('./day5');

describe('day5', function () {
    describe('#countNice()', function () {
        it('should count the occurrence of nice strings', function () {
            var strings = [
                'ugknbfddgicrmopn', // nice
                'aaa',              // nice
                'jchzalrnumimnmhp', // naughty
                'haegwjzuvuyypxyu', // naughty
                'dvszwmarrgswjxmb'  // naughty
            ].join('\n');

            expect(day5.countNice(strings)).to.equal(2);
        });
    });

    describe('#countNicer()', function () {
        it('should count the occurrence of nice strings', function () {
            var strings = [
                'qjhvhtzxzqqjkmpb', // nice
                'xxyxx',            // nice
                'uurcxstgmygtbstg', // naughty
                'ieodomkazucvgmuy'  // naughty
            ].join('\n');

            expect(day5.countNicer(strings)).to.equal(2);
        });
    });
});
