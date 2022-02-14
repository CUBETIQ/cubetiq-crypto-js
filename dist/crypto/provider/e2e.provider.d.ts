/// <reference types="node" />
import { CryptoProvider } from "../provider.crypto"
interface E2ECryptoProviderOptions {
    privateKey?: string | Buffer | null | undefined
    publicKey?: string | Buffer | null | undefined
    privateKeyPath?: string | null | undefined
    publicKeyPath?: string | null | undefined
    jsonPath?: string | null | undefined
}
export declare class E2ECryptoProvider implements CryptoProvider {
    private privateKey
    private publicKey
    constructor(options: E2ECryptoProviderOptions)
    encrypt(data: string | Buffer): string
    decrypt(data: string): string
}
export {}
