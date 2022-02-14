/// <reference types="node" />
import { ICryptoProvider } from "./provider.crypto"
export declare class CryptoProvider {
    private readonly provider
    constructor(provider: ICryptoProvider)
    encrypt(data: string | Buffer): string
    decrypt(data: string): string
    private static _instance
    static newInstance(provider: ICryptoProvider): CryptoProvider
}
