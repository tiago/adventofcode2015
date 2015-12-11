#! /usr/bin/env node
'use strict';

function extractBoxDimensions(boxes) {
    return boxes.split('\n').map(function (box) {
        return box.split('x').map(Number);
    });
}

function calculateWrappingArea(boxes) {
    var area = 0;
    var dimensions = extractBoxDimensions(boxes);

    dimensions.forEach(function (box) {
        var side1 = box[0] * box[1];
        var side2 = box[1] * box[2];
        var side3 = box[2] * box[0];
        area += 2 * side1 + 2 * side2 + 2 * side3 + Math.min(side1, side2, side3);
    });
    
    return area;
}

function calculateRibbonLength(boxes) {
    var length = 0;
    var dimensions = extractBoxDimensions(boxes);

    dimensions.forEach(function (box) {
        var side1 = box[0] + box[1];
        var side2 = box[1] + box[2];
        var side3 = box[2] + box[0];
        var wrap = Math.min(side1, side2, side3) * 2;
        var bow = box[0] * box[1] * box[2];
        length += wrap + bow;
    });
    
    return length;
}

module.exports = {
    calculateWrappingArea: calculateWrappingArea,
    calculateRibbonLength: calculateRibbonLength
};

/* istanbul ignore next */
function main() {
    var path = require('path');
    var fs = require('fs');

    fs.readFile(path.resolve(__dirname, 'day2.input.txt'), 'utf-8', function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(calculateWrappingArea(data));
        console.log(calculateRibbonLength(data));
    });
}

/* istanbul ignore next */
if (require.main === module) {
    main();
}
