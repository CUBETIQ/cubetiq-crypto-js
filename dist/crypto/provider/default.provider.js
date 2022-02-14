"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.DefaultCryptoProvider = void 0
var util_1 = require("../../util")
var default_crypto_1 = require("./../core/default.crypto")
var DefaultCryptoProvider = /** @class */ (function () {
    function DefaultCryptoProvider(options) {
        var key = options.key,
            iv = options.iv,
            keyiVPath = options.keyiVPath,
            jsonPath = options.jsonPath
        if (keyiVPath) {
            var json = (0, util_1.readFileToJson)(keyiVPath)
            this._key = json.key
            this._iv = json.iv
        } else if (jsonPath) {
            var json = (0, util_1.readFileToJson)(jsonPath)
            this._key = (0, util_1.readFileToString)(json.keyPath)
            this._iv = (0, util_1.readFileToString)(json.ivPath)
        } else {
            this._key = key
            this._iv = iv || key
        }
        ;(0, util_1.assertNotNullOrUndefined)(this._key, "key is required")
    }
    DefaultCryptoProvider.prototype.encrypt = function (data) {
        return (0, default_crypto_1.encrypt)(data, this._key, this._iv)
    }
    DefaultCryptoProvider.prototype.decrypt = function (data) {
        return (0, default_crypto_1.decrypt)(data, this._key, this._iv)
    }
    return DefaultCryptoProvider
})()
exports.DefaultCryptoProvider = DefaultCryptoProvider
//# sourceMappingURL=default.provider.js.map
