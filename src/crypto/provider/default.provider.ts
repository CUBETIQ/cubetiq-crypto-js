import { assertNotNullOrUndefined } from "../../util"
import { ICryptoProvider } from "../provider.crypto"
import { decrypt as dec, encrypt as enc } from "./../core/default.crypto"

export class DefaultCryptoProvider implements ICryptoProvider {
    private _key: string | Buffer | null | undefined
    private _iv: string | Buffer | null | undefined

    constructor(
        key?: string | Buffer | null,
        iv?: string | Buffer | null,
        keyJsonFilePath?: string | null
    ) {
        if (keyJsonFilePath) {
            const json: any = require(keyJsonFilePath)
            this._key = json.key
            this._iv = json.iv
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
