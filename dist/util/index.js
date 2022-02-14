"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.isNullOrUndefinedOrEmpty =
    exports.isNullOrUndefined =
    exports.assertNotNullOrUndefinedOrEmpty =
    exports.assertNotNullOrUndefined =
    exports.bufferToString =
    exports.stringToBuffer =
    exports.readFileToJson =
    exports.readFileToString =
        void 0
var config_1 = require("../config")
var file_util_1 = require("./file.util")
Object.defineProperty(exports, "readFileToString", {
    enumerable: true,
    get: function () {
        return file_util_1.readFileToStringDefaultEncoding
    },
})
Object.defineProperty(exports, "readFileToJson", {
    enumerable: true,
    get: function () {
        return file_util_1.readFileToJson
    },
})
var test_util_1 = require("./test.util")
Object.defineProperty(exports, "assertNotNullOrUndefined", {
    enumerable: true,
    get: function () {
        return test_util_1.assertNotNullOrUndefined
    },
})
Object.defineProperty(exports, "assertNotNullOrUndefinedOrEmpty", {
    enumerable: true,
    get: function () {
        return test_util_1.assertNotNullOrUndefinedOrEmpty
    },
})
Object.defineProperty(exports, "isNullOrUndefined", {
    enumerable: true,
    get: function () {
        return test_util_1.isNullOrUndefined
    },
})
Object.defineProperty(exports, "isNullOrUndefinedOrEmpty", {
    enumerable: true,
    get: function () {
        return test_util_1.isNullOrUndefinedOrEmpty
    },
})
var stringToBuffer = function (data) {
    if (data instanceof Buffer) {
        return data
    } else {
        return Buffer.from(data, config_1.DEFAULT_BUFFER_TYPE)
    }
}
exports.stringToBuffer = stringToBuffer
var bufferToString = function (data) {
    if (data instanceof Buffer) {
        return data.toString(config_1.DEFAULT_ENCODING_TYPE)
    } else {
        return data
    }
}
exports.bufferToString = bufferToString
//# sourceMappingURL=index.js.map
