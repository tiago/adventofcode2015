'use strict';

var expect = require('chai').expect;
var day6 = require('./day6');

xdescribe('day6', function () {
    this.timeout(5000);
    
    describe('#countLights()', function () {
        it('should count lights that are lit', function () {
            expect(day6.countLights('turn on 0,0 through 999,999')).to.equal(1000000);
            expect(day6.countLights('toggle 0,0 through 999,0')).to.equal(1000);
            expect(day6.countLights([
                'turn on 0,0 through 999,999', // turn all lights ON
                'turn off 499,499 through 500,500' // turn OFF the middle four
            ].join('\n'))).to.equal(999996);
        });
    });

    describe('#calculateBrightness()', function () {
        it('should calculate total brightness', function () {
            expect(day6.calculateBrightness('turn on 0,0 through 0,0')).to.equal(1);
            expect(day6.calculateBrightness('toggle 0,0 through 999,999')).to.equal(2000000);
        });
    });
});
