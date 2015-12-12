'use strict';

var md5 = require('md5');

function mine(key, difficulty) {
    var regex = new RegExp('^0{' + difficulty + '}');
    var answer = 0;
    var hash = null;

    while (!regex.test(hash)) {
        answer++;
        hash = md5(key + answer);
    }
    return answer;
}

function mineAdventCoin(key) {
    return mine(key, 5);
}

function mineHarderAdventCoin(key) {
    return mine(key, 6);
}

module.exports = {
    mineAdventCoin: mineAdventCoin,
    mineHarderAdventCoin: mineHarderAdventCoin
};
