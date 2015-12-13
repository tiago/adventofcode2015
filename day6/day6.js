'use strict';

function LightGrid(size) {
    var grid = new Array(size);
    for (var i = 0; i < size; i++) {
        grid[i] = new Array(size);
    }

    function traverse(from, to, action) {
        for (var x = from.x; x <= to.x; x++) {
            for (var y = from.y; y <= to.y; y++) {
                action(x, y);
            }
        }
    }

    this.turnOn = function turnOn(from, to) {
        traverse(from, to, function (x, y) {
            grid[x][y] = true;
        });
    };

    this.turnOff = function turnOff(from, to) {
        traverse(from, to, function (x, y) {
            grid[x][y] = false;
        });
    };

    this.toggle = function toggle(from, to) {
        traverse(from, to, function (x, y) {
            grid[x][y] = !grid[x][y];
        });
    };

    this.countLit = function countLit() {
        var count = 0;
        var from = { x: 0, y: 0 };
        var to = { x: size - 1, y: size - 1 };
        traverse(from, to, function (x, y) {
            count += grid[x][y] ? 1 : 0;
        });
        return count;
    };
}

function countLights(data) {
    var grid = new LightGrid(1000);
    var commandRegExp = /(toggle|turn\s+(?:on|off))\s+(\d+,\d+)\s+through\s+(\d+,\d+)/ig;

    function parsePosition(string) {
        var numbers = string.split(',').map(Number);
        return {
            x: numbers[0],
            y: numbers[1]
        };
    }

    var matches;
    while ((matches = commandRegExp.exec(data)) !== null) {
        var action = matches[1];
        var from = parsePosition(matches[2]);
        var to = parsePosition(matches[3]);

        switch (action) {
        case 'toggle':
            grid.toggle(from, to);
            break;
        case 'turn on':
            grid.turnOn(from, to);
            break;
        case 'turn off':
            grid.turnOff(from, to);
            break;
        }
    }

    return grid.countLit();
}

module.exports = {
    countLights: countLights
};
