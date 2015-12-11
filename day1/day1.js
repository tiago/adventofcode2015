#! /usr/bin/env node
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

/* istanbul ignore next */
function main() {
    var path = require('path');
    var fs = require('fs');

    fs.readFile(path.resolve(__dirname, 'day1.input.txt'), 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(findFinalFloor(data));
        console.log(findBasementPosition(data));
    });
}

/* istanbul ignore next */
if (require.main === module) {
    main();
}
