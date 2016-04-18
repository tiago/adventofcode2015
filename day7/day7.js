'use strict';

function Circuit() {
    var binaryRegExp = /^(\w+) (AND|OR|LSHIFT|RSHIFT) (\w+)$/;
    var unaryRegExp = /^(NOT) (\w+)$/;
    var wireRegExp = /^([a-z]+)$/;
    var valueRegExp = /^(\d+)$/;
    var bitMask = parseInt('0x0000ffff', 16); // 65535

    var circuit = Object.create(null);
    var cache = Object.create(null);

    function clearCache() {
        cache = Object.create(null);
    }

    function parse(str) {
        var matches;
        var result = null;
        if (str in cache) {
            return cache[str];
        }
        if (valueRegExp.test(str)) {
            result = Number(str);
        }
        else if (wireRegExp.test(str)) {
            result = parse(circuit[str]);
        }
        else if ((matches = str.match(unaryRegExp)) !== null) {
            result = parseUnary(matches[1], matches[2]);
        }
        else if ((matches = str.match(binaryRegExp)) !== null) {
            result = parseBinary(matches[2], matches[1], matches[3]);
        }
        cache[str] = result;
        return result;
    }

    function parseBinary(gate, left, right) {
        left = parse(left);
        right = parse(right);
        if (left === null || right === null) {
            return null;
        }
        switch (gate) {
        case 'AND':
            return left & right;
        case 'OR':
            return left | right;
        case 'LSHIFT':
            // this one can overflow, hence the bit mask
            return (left << right) & bitMask;
        case 'RSHIFT':
            return left >> right;
        default:
            return null;
        }
    }

    function parseUnary(gate, operand) {
        operand = parse(operand);
        if (operand === null) {
            return null;
        }
        switch (gate) {
        case 'NOT':
            return (~operand) & bitMask;
        default:
            return null;
        }
    }

    this.setWire = function setWire(wire, source) {
        circuit[wire] = source;
    };

    this.evaluate = function evaluate(instruction) {
        clearCache();
        return parse(instruction);
    };
}

function generateCircuit(data) {
    var instructions = data.split('\n');
    var circuit = new Circuit();
    instructions.forEach(function (instruction) {
        var matches = instruction.match(/([\w\s]+) -> (\w+)/);
        if (matches) {
            circuit.setWire(matches[2], matches[1]);
        }
    });
    return circuit;
}

function calculateSignal(data) {
    var circuit = generateCircuit(data);
    return circuit.evaluate('a');
}

function calculateNewSignal(data) {
    var circuit = generateCircuit(data);
    var value = circuit.evaluate('a');
    circuit.setWire('b', value);
    return circuit.evaluate('a');
}

module.exports = {
    calculateSignal: calculateSignal,
    calculateNewSignal: calculateNewSignal 
};
