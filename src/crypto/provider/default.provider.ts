import {
    assertNotNullOrUndefined,
    readFileToJson,
    readFileToString,
} from "../../util"
import { ICryptoProvider } from "../provider.crypto"
import { decrypt as dec, encrypt as enc } from "./../core/default.crypto"

interface DefaultCryptoProviderOptions {
    key?: string | Buffer | null | undefined
    iv?: string | Buffer | null | undefined
    keyiVPath?: string | null | undefined
    jsonPath?: string | null | undefined
}

export class DefaultCryptoProvider implements ICryptoProvider {
    private _key: string | Buffer | null | undefined
    private _iv: string | Buffer | null | undefined

    constructor(options: DefaultCryptoProviderOptions) {
        const { key, iv, keyiVPath, jsonPath } = options

        if (keyiVPath) {
            const json: any = readFileToJson(keyiVPath)
            this._key = json.key
            this._iv = json.iv
        } else if (jsonPath) {
            const json: any = readFileToJson(jsonPath)
            this._key = readFileToString(json.keyPath)
            this._iv = readFileToString(json.ivPath)
        } else {
            this._key = key
            this._iv = iv || key
        }

        assertNotNullOrUndefined(this._key, "key is required")
    }

    encrypt(data: string | Buffer): string {
        return enc(data, this._key!, this._iv)
    }

    decrypt(data: string): string {
        return dec(data, this._key!, this._iv)
    }
}
