'use strict';

var expect = require('chai').expect;
var day4 = require('./day4');

xdescribe('day4', function () {
    describe('#mineAdventCoin()', function () {
        it('should find the numberic answer of the secret key', function () {
            this.timeout(30000);
            expect(day4.mineAdventCoin('abcdef')).to.equal(609043);
            expect(day4.mineAdventCoin('pqrstuv')).to.equal(1048970);
        });
    });
});
