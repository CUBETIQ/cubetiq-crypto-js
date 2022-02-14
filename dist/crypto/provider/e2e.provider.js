"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.E2ECryptoProvider = void 0
var __1 = require("..")
var util_1 = require("../../util")
var E2ECryptoProvider = /** @class */ (function () {
    function E2ECryptoProvider(options) {
        var privateKey = options.privateKey,
            publicKey = options.publicKey,
            privateKeyPath = options.privateKeyPath,
            publicKeyPath = options.publicKeyPath,
            jsonPath = options.jsonPath
        var isPrivateKeyInitialized = false
        var isPublicKeyInitialized = false
        if (privateKeyPath) {
            this.privateKey = (0, util_1.readFileToString)(privateKeyPath)
            isPrivateKeyInitialized = !(0, util_1.isNullOrUndefinedOrEmpty)(
                this.privateKey
            )
        }
        if (publicKeyPath) {
            this.publicKey = (0, util_1.readFileToString)(publicKeyPath)
            isPublicKeyInitialized = !(0, util_1.isNullOrUndefinedOrEmpty)(
                this.publicKey
            )
        }
        if (!isPrivateKeyInitialized && !isPublicKeyInitialized && jsonPath) {
            var json = (0, util_1.readFileToJson)(jsonPath)
            if (json.privateKey) {
                this.privateKey = json.privateKey
                isPrivateKeyInitialized = !(0, util_1.isNullOrUndefinedOrEmpty)(
                    this.privateKey
                )
            }
            if (json.publicKey) {
                this.publicKey = json.publicKey
                isPublicKeyInitialized = !(0, util_1.isNullOrUndefinedOrEmpty)(
                    this.publicKey
                )
            }
            if (!isPrivateKeyInitialized && json.privateKeyPath) {
                this.privateKey = (0, util_1.readFileToString)(
                    json.privateKeyPath
                )
                isPrivateKeyInitialized = !(0, util_1.isNullOrUndefinedOrEmpty)(
                    this.privateKey
                )
            }
            if (!isPublicKeyInitialized && json.publicKeyPath) {
                this.publicKey = (0, util_1.readFileToString)(
                    json.publicKeyPath
                )
                isPublicKeyInitialized = !(0, util_1.isNullOrUndefinedOrEmpty)(
                    this.publicKey
                )
            }
        }
        if (!isPrivateKeyInitialized) {
            this.privateKey = privateKey
        }
        if (!isPublicKeyInitialized) {
            this.publicKey = publicKey
        }
        ;(0, util_1.assertNotNullOrUndefined)(
            this.privateKey,
            "Private key is required"
        )
    }
    E2ECryptoProvider.prototype.encrypt = function (data) {
        var key = this.publicKey || this.privateKey
        return (0, __1.e2eEncrypt)(data, key.toString())
    }
    E2ECryptoProvider.prototype.decrypt = function (data) {
        return (0, __1.e2eDecrypt)(data, this.privateKey.toString())
    }
    return E2ECryptoProvider
})()
exports.E2ECryptoProvider = E2ECryptoProvider
//# sourceMappingURL=e2e.provider.js.map
