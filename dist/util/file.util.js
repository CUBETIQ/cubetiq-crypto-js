"use strict"
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function () {
                      return m[k]
                  },
              })
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
          })
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", {
                  enumerable: true,
                  value: v,
              })
          }
        : function (o, v) {
              o["default"] = v
          })
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
            for (var k in mod)
                if (
                    k !== "default" &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
    }
Object.defineProperty(exports, "__esModule", { value: true })
exports.readFileToJson = exports.readFileToStringDefaultEncoding = void 0
var fs = __importStar(require("fs"))
var path = __importStar(require("path"))
var config_1 = require("../config")
var readFileToStringDefaultEncoding = function (relativeFilePath) {
    var absolutePath = path.resolve(relativeFilePath)
    return fs.readFileSync(absolutePath, config_1.DEFAULT_ENCODING_TYPE)
}
exports.readFileToStringDefaultEncoding = readFileToStringDefaultEncoding
var readFileToJson = function (relativeFilePath) {
    return JSON.parse(
        (0, exports.readFileToStringDefaultEncoding)(relativeFilePath)
    )
}
exports.readFileToJson = readFileToJson
//# sourceMappingURL=file.util.js.map
