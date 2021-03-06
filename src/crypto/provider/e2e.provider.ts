import { e2eDecrypt, e2eEncrypt } from ".."
import {
    assertNotNullOrUndefined,
    isNullOrUndefinedOrEmpty,
    readFileToJson,
    readFileToString,
} from "../../util"
import { CryptoProvider } from "../provider.crypto"

interface E2ECryptoProviderOptions {
    privateKey?: string | Buffer | null | undefined
    publicKey?: string | Buffer | null | undefined
    privateKeyPath?: string | null | undefined
    publicKeyPath?: string | null | undefined
    jsonPath?: string | null | undefined
}

export class E2ECryptoProvider implements CryptoProvider {
    private privateKey: string | Buffer | null | undefined
    private publicKey: string | Buffer | null | undefined

    constructor(options: E2ECryptoProviderOptions) {
        const {
            privateKey,
            publicKey,
            privateKeyPath,
            publicKeyPath,
            jsonPath,
        } = options

        let isPrivateKeyInitialized = false
        let isPublicKeyInitialized = false
        if (privateKeyPath) {
            this.privateKey = readFileToString(privateKeyPath)
            isPrivateKeyInitialized = !isNullOrUndefinedOrEmpty(this.privateKey)
        }

        if (publicKeyPath) {
            this.publicKey = readFileToString(publicKeyPath)
            isPublicKeyInitialized = !isNullOrUndefinedOrEmpty(this.publicKey)
        }

        if (!isPrivateKeyInitialized && !isPublicKeyInitialized && jsonPath) {
            const json = readFileToJson(jsonPath)
            if (json.privateKey) {
                this.privateKey = json.privateKey
                isPrivateKeyInitialized = !isNullOrUndefinedOrEmpty(
                    this.privateKey
                )
            }

            if (json.publicKey) {
                this.publicKey = json.publicKey
                isPublicKeyInitialized = !isNullOrUndefinedOrEmpty(
                    this.publicKey
                )
            }

            if (!isPrivateKeyInitialized && json.privateKeyPath) {
                this.privateKey = readFileToString(json.privateKeyPath)
                isPrivateKeyInitialized = !isNullOrUndefinedOrEmpty(
                    this.privateKey
                )
            }

            if (!isPublicKeyInitialized && json.publicKeyPath) {
                this.publicKey = readFileToString(json.publicKeyPath)
                isPublicKeyInitialized = !isNullOrUndefinedOrEmpty(
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

        assertNotNullOrUndefined(this.privateKey, "Private key is required")
    }

    encrypt(data: string | Buffer): string {
        const key = this.publicKey || this.privateKey
        return e2eEncrypt(data, key!.toString())
    }

    decrypt(data: string): string {
        return e2eDecrypt(data, this.privateKey!.toString())
    }
}
