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

function hasPairTwice(string) {
    var pairs = Object.create(null);

    for (var i = 0; i < string.length - 1; i++) {
        var pair = string.substr(i, 2);
        // new pair
        if (!(pair in pairs)) {
            pairs[pair] = i;
            continue;
        }
        // known pair
        var previousIndex = pairs[pair];
        var overlapped = previousIndex === i - 1;
        if (!overlapped) {
            return true;
        }
    }

    return false;
}

function hasLetterTwiceWithGap(string) {
    for (var i = 0; i < string.length - 2; i++) {
        if (string[i] === string[i+2]) {
            return true;
        }
    }
    return false;
}

function checkRules(string, rules) {
    return rules.every(function (rule) {
        return rule(string);
    });
}

function isNice(string) {
    return checkRules(string, [hasThreeVowels, hasLetterTwice, hasNoBadSequences]);
}

function isNicer(string) {
    return checkRules(string, [hasPairTwice, hasLetterTwiceWithGap]);
}

function countNice(data) {
    return data.split('\n').filter(isNice).length;
}

function countNicer(data) {
    return data.split('\n').filter(isNicer).length;
}

module.exports = {
    countNice: countNice,
    countNicer: countNicer
};
