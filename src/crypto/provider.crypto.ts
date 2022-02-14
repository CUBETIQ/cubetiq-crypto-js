export interface ICryptoProvider {
    encrypt(data: string | Buffer): string
    decrypt(data: string): string
}
