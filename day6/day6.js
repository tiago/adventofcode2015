'use strict';

function LightGrid(size) {
    // init
    var grid = new Array(size);
    for (var x = 0; x < size; x++) {
        grid[x] = new Array(size);
        for (var y = 0; y < size; y++) {
            grid[x][y] = { on: false, brightness: 0 };
        }
    }

    function traverse(from, to, action) {
        for (var x = from.x; x <= to.x; x++) {
            for (var y = from.y; y <= to.y; y++) {
                action(grid[x][y]);
            }
        }
    }

    this.turnOn = function turnOn(from, to) {
        traverse(from, to, function (light) {
            light.on = true;
            light.brightness += 1; 
        });
    };

    this.turnOff = function turnOff(from, to) {
        traverse(from, to, function (light) {
            light.on = false;
            if (light.brightness > 0) {
                light.brightness -= 1; 
            }
        });
    };

    this.toggle = function toggle(from, to) {
        traverse(from, to, function (light) {
            light.on = !light.on;
            light.brightness += 2;
        });
    };

    this.forEach = function forEach(fn) {
        var from = { x: 0, y: 0 };
        var to = { x: size - 1, y: size - 1 };
        traverse(from, to, fn);
    };
}

function generateGrid(data) {
    var grid = new LightGrid(1000);
    var commandRegExp = /(toggle|turn on|turn off) (\d+,\d+) through (\d+,\d+)/ig;

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

    return grid;
}

function countLights(data) {
    var grid = generateGrid(data);
    var count = 0;
    grid.forEach(function (light) {
        count += light.on ? 1 : 0;
    });
    return count;
}

function calculateBrightness(data) {
    var grid = generateGrid(data);
    var brightness = 0;
    grid.forEach(function (light) {
        brightness += light.brightness;
    });
    return brightness;
}

module.exports = {
    countLights: countLights,
    calculateBrightness: calculateBrightness
};
