#! /usr/bin/env node
'use strict';

function Map() {
    var map = Object.create(null);

    this.visit = function visit(position) {
        var mapKey = position.x + 'x' + position.y;
        if (!(mapKey in map)) {
            map[mapKey] = true;
        }
    };

    this.getVisitedPositions = function getVisitedPositions() {
        return Object.keys(map);
    };
}

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
        map.visit(position);
    };

    this.move(null); // initial position
}

function countHouses(directions) {
    var map = new Map();
    var santa = new Santa(map);

    for (var i = 0; i < directions.length; i++) {
        santa.move(directions[i]);
    }

    return map.getVisitedPositions().length;
}

function countHousesWithRobot(directions) {
    var map = new Map();
    var human = new Santa(map);
    var robot = new Santa(map);

    for (var i = 0; i < directions.length; i++) {
        var santa = i % 2 === 0 ? human : robot;
        santa.move(directions[i]);
    }

    return map.getVisitedPositions().length;
}

module.exports = {
    countHouses: countHouses,
    countHousesWithRobot: countHousesWithRobot
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
        console.log(countHousesWithRobot(data));
    });
}

/* istanbul ignore next */
if (require.main === module) {
    main();
}
