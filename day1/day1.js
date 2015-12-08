#! /usr/bin/env node
'use strict';

function find_final_floor(parenthesis) {
    var floor = 0;
    for (var i = 0; i < parenthesis.length; i++) {
        floor += parenthesis[i] === '(' ? 1 : -1;
    }
    return floor;
}

function find_basement_position(parenthesis) {
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
    find_final_floor: find_final_floor,
    find_basement_position: find_basement_position
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

        console.log(find_final_floor(data));
        console.log(find_basement_position(data));
    });
}

/* istanbul ignore next */
if (require.main === module) {
    main();
}
