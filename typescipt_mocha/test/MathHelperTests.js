"use strict";
/// <reference path="../typings/main.d.ts" />
var MathHelper_1 = require('../src/pesky_folder/MathHelper');
var Chai = require('chai');
var expect = Chai.expect;
describe('The Math Helper Library', function () {
    describe('The `sum` method', function () {
        it('should provide a sum of a number array', function () {
            var numbers = [, 0, -1, 1, 42, null];
            expect(MathHelper_1.default.sum(numbers)).to.eq(42);
        });
        it('example failing test', function () {
            expect(1).to.eq(0);
        });
    });
});
