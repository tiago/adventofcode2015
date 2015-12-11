#! /usr/bin/env node
'use strict';

function extract_box_dimensions(boxes) {
    return boxes.split('\n').map(function (box) {
        return box.split('x').map(Number);
    });
}

function calculate_wrapping_area(boxes) {
    var area = 0;
    var dimensions = extract_box_dimensions(boxes);

    dimensions.forEach(function (box) {
        var side1 = box[0] * box[1];
        var side2 = box[1] * box[2];
        var side3 = box[2] * box[0];
        area += 2 * side1 + 2 * side2 + 2 * side3 + Math.min(side1, side2, side3);
    });
    
    return area;
}

function calculate_ribbon_length(boxes) {
    var length = 0;
    var dimensions = extract_box_dimensions(boxes);

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
    calculate_wrapping_area: calculate_wrapping_area,
    calculate_ribbon_length: calculate_ribbon_length
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

        console.log(calculate_wrapping_area(data));
        console.log(calculate_ribbon_length(data));
    });
}

/* istanbul ignore next */
if (require.main === module) {
    main();
}
