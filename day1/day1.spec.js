'use strict';

var expect = require('chai').expect;
var day1 = require('./day1');

describe('day1', function () {
    describe('#find_final_floor()', function () {
        it('should find final floor', function () {
            expect(day1.find_final_floor('(())')).to.equal(0);
            expect(day1.find_final_floor('()()')).to.equal(0);

            expect(day1.find_final_floor('(((')).to.equal(3);
            expect(day1.find_final_floor('(()(()(')).to.equal(3);
            expect(day1.find_final_floor('))(((((')).to.equal(3);

            expect(day1.find_final_floor('())')).to.equal(-1);
            expect(day1.find_final_floor('))(')).to.equal(-1);

            expect(day1.find_final_floor(')))')).to.equal(-3);
            expect(day1.find_final_floor(')())())')).to.equal(-3);
        });
    });
});
