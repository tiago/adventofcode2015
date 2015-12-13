'use strict';

var expect = require('chai').expect;
var day6 = require('./day6');

describe('day6', function () {
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
});
