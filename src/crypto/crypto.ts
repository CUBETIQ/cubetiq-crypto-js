import { CryptoProvider } from "./provider.crypto"

export class Crypto {
    constructor(private readonly provider: CryptoProvider) {}

    public encrypt(data: string | Buffer): string {
        return this.provider.encrypt(data)
    }

    public decrypt(data: string): string {
        return this.provider.decrypt(data)
    }

    private static _instance: Crypto | null | undefined
    public static newInstance(provider: CryptoProvider): Crypto {
        if (!Crypto._instance) {
            Crypto._instance = new Crypto(provider)
        }
        return Crypto._instance
    }
}
