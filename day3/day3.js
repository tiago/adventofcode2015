#! /usr/bin/env node
'use strict';

function countHouses(directions) {
    var count = 0;
    var history = Object.create(null);
    var position = {
        x: 0,
        y: 0
    };

    function savePosition() {
        var positionKey = position.x + 'x' + position.y;
        if (!(positionKey in history)) {
            history[positionKey] = null;
            count++;
        }
    }

    savePosition(); // initial position

    for (var i = 0; i < directions.length; i++) {
        switch (directions[i]) {
        case '<':
            position.x--;
            break;
        case '>':
            position.x++;
            break;
        case 'v':
            position.y--;
            break;
        case '^':
            position.y++;
            break;
        }
        savePosition();
    }

    return count;
}

module.exports = {
    countHouses: countHouses
};

/* istanbul ignore next */
function main() {
    var path = require('path');
    var fs = require('fs');

    fs.readFile(path.resolve(__dirname, 'day3.input.txt'), 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(countHouses(data));
    });
}

/* istanbul ignore next */
if (require.main === module) {
    main();
}
