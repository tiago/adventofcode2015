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

    describe('#find_basement_position()', function () {
        it('should find parenthesis position that goes to the basement', function () {
            expect(day1.find_basement_position(')')).to.equal(1);
            expect(day1.find_basement_position('()())')).to.equal(5);
        });

        it('should return zero if basement position is not found', function () {
            expect(day1.find_basement_position('(')).to.equal(0);
        });
    });
});
