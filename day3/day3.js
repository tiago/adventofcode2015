#! /usr/bin/env node
'use strict';

function Santa(map) {
    var position = {
        x: 0,
        y: 0
    };
    this.move = function move(direction) {
        switch (direction) {
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
        var positionKey = position.x + 'x' + position.y;
        if (!(positionKey in map)) {
            map[positionKey] = true;
            this.houseCount++;
        }
    };
    this.move(null); // initial position
}

function countHouses(directions) {
    var map = Object.create(null);
    var santa = new Santa(map);

    for (var i = 0; i < directions.length; i++) {
        santa.move(directions[i]);
    }

    return Object.keys(map).length;
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
