'use strict';

var md5 = require('md5');

function mineAdventCoin(key) {
    var regex = new RegExp(/^0{5}/);
    var answer = 0;
    var hash = null;

    while (!regex.test(hash)) {
        answer++;
        hash = md5(key + answer);
    }

    return answer;
}

module.exports = {
    mineAdventCoin: mineAdventCoin
};
