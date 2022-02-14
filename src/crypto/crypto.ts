import { ICryptoProvider } from "./provider.crypto"

export class CryptoProvider {
    constructor(private readonly provider: ICryptoProvider) {}

    public encrypt(data: string | Buffer): string {
        return this.provider.encrypt(data)
    }

    public decrypt(data: string): string {
        return this.provider.decrypt(data)
    }

    private static _instance: CryptoProvider | null | undefined
    public static newInstance(provider: ICryptoProvider): CryptoProvider {
        if (!CryptoProvider._instance) {
            CryptoProvider._instance = new CryptoProvider(provider)
        }
        return CryptoProvider._instance
    }
}
