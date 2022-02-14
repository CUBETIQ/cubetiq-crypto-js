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
exports.decrypt = exports.encrypt = void 0
var crypto = __importStar(require("crypto"))
var config_1 = require("../../config")
var util_1 = require("../../util")
var encrypt = function (data, privateOrPublicKey) {
    var buffer = (0, util_1.stringToBuffer)(data)
    var encrypted = crypto.publicEncrypt(privateOrPublicKey, buffer)
    return encrypted.toString(config_1.DEFAULT_BUFFER_TYPE)
}
exports.encrypt = encrypt
var decrypt = function (data, privateKey, passphrase) {
    var buffer = (0, util_1.stringToBuffer)(data)
    var decrypted = crypto.privateDecrypt(
        {
            key: privateKey,
            passphrase: passphrase || "",
        },
        buffer
    )
    return decrypted.toString(config_1.DEFAULT_ENCODING_TYPE)
}
exports.decrypt = decrypt
//# sourceMappingURL=e2e.crypto.js.map
