'use strict';

function findFinalFloor(parenthesis) {
    var floor = 0;
    for (var i = 0; i < parenthesis.length; i++) {
        floor += parenthesis[i] === '(' ? 1 : -1;
    }
    return floor;
}

function findBasementPosition(parenthesis) {
    var floor = 0;
    for (var i = 0; i < parenthesis.length; i++) {
        floor += parenthesis[i] === '(' ? 1 : -1;
        if (floor === -1) {
            return i + 1;
        }
    }
    return 0;
}

module.exports = {
    findFinalFloor: findFinalFloor,
    findBasementPosition: findBasementPosition
};
