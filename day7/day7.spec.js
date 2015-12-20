'use strict';

var expect = require('chai').expect;
var day7 = require('./day7');

describe('day7', function () {
    describe('#computeWireSignals()', function () {
        it('should calculate the signal value for wire `a`', function () {
            expect(day7.calculateSignal([
                '123 -> x',
                '456 -> y',
                'x AND y -> d',
                'x OR y -> e',
                'd LSHIFT 2 -> f',
                'e RSHIFT 2 -> g',
                'NOT x -> h',
                'NOT y -> i',
                'h AND i -> a'
            ].join('\n'))).to.equal(65028);
        });
    });
});
