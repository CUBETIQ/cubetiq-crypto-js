"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.isNullOrUndefinedOrEmpty =
    exports.isNullOrUndefined =
    exports.assertNotNullOrUndefinedOrEmpty =
    exports.assertNotNullOrUndefined =
        void 0
var assertNotNullOrUndefined = function (value, msg) {
    if ((0, exports.isNullOrUndefined)(value)) {
        throw new Error(msg || "value is null or undefined")
    }
}
exports.assertNotNullOrUndefined = assertNotNullOrUndefined
var assertNotNullOrUndefinedOrEmpty = function (value, msg) {
    if ((0, exports.isNullOrUndefinedOrEmpty)(value)) {
        throw new Error(msg || "value is null or undefined or empty")
    }
}
exports.assertNotNullOrUndefinedOrEmpty = assertNotNullOrUndefinedOrEmpty
var isNullOrUndefined = function (value) {
    return value === null || value === undefined
}
exports.isNullOrUndefined = isNullOrUndefined
var isNullOrUndefinedOrEmpty = function (value) {
    return (0, exports.isNullOrUndefined)(value) || value === ""
}
exports.isNullOrUndefinedOrEmpty = isNullOrUndefinedOrEmpty
//# sourceMappingURL=test.util.js.map
