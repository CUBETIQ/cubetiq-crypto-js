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
exports.cryptoRandomString =
    exports.cryptoRandomBytes =
    exports.decrypt =
    exports.encrypt =
        void 0
var crypto = __importStar(require("crypto"))
var config_1 = require("../../config")
var util_1 = require("../../util")
var encrypt = function (data, key, iv) {
    var cipher = crypto.createCipheriv(
        config_1.DEFAULT_AES_ALGORITHM,
        (0, util_1.stringToBuffer)(key),
        (0, util_1.stringToBuffer)(iv || key)
    )
    var _data = (0, util_1.bufferToString)(data)
    var encrypted = cipher.update(
        _data,
        config_1.DEFAULT_ENCODING_TYPE,
        config_1.DEFAULT_BUFFER_TYPE
    )
    encrypted += cipher.final(config_1.DEFAULT_BUFFER_TYPE)
    return encrypted
}
exports.encrypt = encrypt
var decrypt = function (data, key, iv) {
    var decipher = crypto.createDecipheriv(
        config_1.DEFAULT_AES_ALGORITHM,
        (0, util_1.stringToBuffer)(key),
        (0, util_1.stringToBuffer)(iv || key)
    )
    var _data = (0, util_1.bufferToString)(data)
    var decrypted = decipher.update(
        _data,
        config_1.DEFAULT_BUFFER_TYPE,
        config_1.DEFAULT_ENCODING_TYPE
    )
    decrypted += decipher.final(config_1.DEFAULT_ENCODING_TYPE)
    return decrypted
}
exports.decrypt = decrypt
var cryptoRandomBytes = function (length) {
    return Buffer.from(crypto.randomBytes(length))
}
exports.cryptoRandomBytes = cryptoRandomBytes
var cryptoRandomString = function (length) {
    return cryptoRandomBytes(length).toString(config_1.DEFAULT_BUFFER_TYPE)
}
exports.cryptoRandomString = cryptoRandomString
//# sourceMappingURL=default.crypto.js.map
