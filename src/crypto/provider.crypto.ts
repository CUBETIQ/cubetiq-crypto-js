export interface CryptoProvider {
    encrypt(data: string | Buffer): string
    decrypt(data: string): string
}
