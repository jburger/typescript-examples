"use strict";
/// <reference path="../typings/main.d.ts" />
var MathHelper_1 = require('../src/MathHelper');
var Chai = require('chai');
var expect = Chai.expect;
describe('MathHelper Library', function () {
    describe('`sum` method', function () {
        it('should provide a sum of a number array', function () {
            var numbers = [, 0, -1, 1, 42, null];
            expect(MathHelper_1.default.sum(numbers)).to.eq(42);
        });
    });
});

//# sourceMappingURL=MathHelperTests.js.map
