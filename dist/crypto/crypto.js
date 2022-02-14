"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.CryptoProvider = void 0
var CryptoProvider = /** @class */ (function () {
    function CryptoProvider(provider) {
        this.provider = provider
    }
    CryptoProvider.prototype.encrypt = function (data) {
        return this.provider.encrypt(data)
    }
    CryptoProvider.prototype.decrypt = function (data) {
        return this.provider.decrypt(data)
    }
    CryptoProvider.newInstance = function (provider) {
        if (!CryptoProvider._instance) {
            CryptoProvider._instance = new CryptoProvider(provider)
        }
        return CryptoProvider._instance
    }
    return CryptoProvider
})()
exports.CryptoProvider = CryptoProvider
//# sourceMappingURL=crypto.js.map
