'use strict';

function hasThreeVowels(string) {
    var occurrences = string.match(/[a,e,i,o,u]/g);
    return occurrences && occurrences.length >= 3;
}

function hasLetterTwice(string) {
    for (var i = 0; i < string.length - 1; i++) {
        if (string[i] === string[i+1]) {
            return true;
        }
    }
    return false;
}

function hasNoBadSequences(string) {
    var badSequences = ['ab', 'cd', 'pq', 'xy'];

    return badSequences.every(function (sequence) {
        return string.indexOf(sequence) === -1;
    });
}

function isNice(string) {
    var niceRules = [hasThreeVowels, hasLetterTwice, hasNoBadSequences];
    
    return niceRules.every(function (rule) {
        return rule(string);
    });
}

function countNice(data) {
    return data.split('\n').filter(isNice).length;
}

module.exports = {
    countNice: countNice
};
