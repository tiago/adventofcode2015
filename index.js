#! /usr/bin/env node
'use strict';

function main() {
    var path = require('path');
    var fs = require('fs');

    function printDay(n) {
        var day = 'day' + n;
        var module = path.resolve(__dirname, day, day + '.js');
        var input = path.resolve(__dirname, day, day + '.input.txt');

        try {
            var api = require(module);
            var data = fs.readFileSync(input, 'utf-8');
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
        
        console.log('*', day);
        for (var method in api) {
            console.log(method, ':', api[method](data));
        }
        console.log('');
        delete require.cache[module];
    }

    for (var i = 1; i < 26; i++) {
        printDay(i);
    }
}

if (require.main === module) {
    main();
}
