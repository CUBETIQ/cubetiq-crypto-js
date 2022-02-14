/// <reference types="node" />
import { CryptoProvider } from "../provider.crypto"
interface DefaultCryptoProviderOptions {
    key?: string | Buffer | null | undefined
    iv?: string | Buffer | null | undefined
    keyiVPath?: string | null | undefined
    jsonPath?: string | null | undefined
}
export declare class DefaultCryptoProvider implements CryptoProvider {
    private _key
    private _iv
    constructor(options: DefaultCryptoProviderOptions)
    encrypt(data: string | Buffer): string
    decrypt(data: string): string
}
export {}
