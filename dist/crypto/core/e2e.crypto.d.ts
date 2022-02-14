/// <reference types="node" />
declare const encrypt: (
    data: string | Buffer,
    privateOrPublicKey: string
) => string
declare const decrypt: (
    data: string | Buffer,
    privateKey: string,
    passphrase?: string | null | undefined
) => string
export { encrypt, decrypt }
