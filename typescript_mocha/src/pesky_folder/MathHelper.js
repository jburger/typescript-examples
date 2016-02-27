"use strict";
var MathHelper = (function () {
    function MathHelper() {
    }
    MathHelper.sum = function (numbers) {
        return numbers
            .reduce(function (prev, curr) { return prev + curr; });
    };
    return MathHelper;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MathHelper;
