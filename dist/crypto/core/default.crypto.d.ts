/// <reference types="node" />
declare const encrypt: (
    data: string | Buffer,
    key: string | Buffer,
    iv?: string | Buffer | null | undefined
) => string
declare const decrypt: (
    data: string | Buffer,
    key: string | Buffer,
    iv?: string | Buffer | null | undefined
) => string
export { encrypt, decrypt }
