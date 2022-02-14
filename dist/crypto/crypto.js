"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.Crypto = void 0
var Crypto = /** @class */ (function () {
    function Crypto(provider) {
        this.provider = provider
    }
    Crypto.prototype.encrypt = function (data) {
        return this.provider.encrypt(data)
    }
    Crypto.prototype.decrypt = function (data) {
        return this.provider.decrypt(data)
    }
    Crypto.newInstance = function (provider) {
        if (!Crypto._instance) {
            Crypto._instance = new Crypto(provider)
        }
        return Crypto._instance
    }
    return Crypto
})()
exports.Crypto = Crypto
//# sourceMappingURL=crypto.js.map
