/// <reference types="node" />
import { CryptoProvider } from "./provider.crypto"
export declare class Crypto {
    private readonly provider
    constructor(provider: CryptoProvider)
    encrypt(data: string | Buffer): string
    decrypt(data: string): string
    private static _instance
    static newInstance(provider: CryptoProvider): Crypto
}
