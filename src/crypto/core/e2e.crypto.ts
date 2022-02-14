import * as crypto from "crypto"

import { DEFAULT_BUFFER_TYPE, DEFAULT_ENCODING_TYPE } from "../../config"
import { stringToBuffer } from "../../util"

const encrypt = (data: string | Buffer, privateOrPublicKey: string): string => {
    const buffer = stringToBuffer(data)
    const encrypted = crypto.publicEncrypt(privateOrPublicKey, buffer)
    return encrypted.toString(DEFAULT_BUFFER_TYPE)
}

const decrypt = (
    data: string | Buffer,
    privateKey: string,
    passphrase?: string | null
): string => {
    const buffer = stringToBuffer(data)
    const decrypted = crypto.privateDecrypt(
        {
            key: privateKey,
            passphrase: passphrase || "",
        },
        buffer
    )
    return decrypted.toString(DEFAULT_ENCODING_TYPE)
}

export { encrypt, decrypt }
