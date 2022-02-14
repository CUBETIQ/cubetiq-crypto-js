import * as crypto from "crypto"

import { DEFAULT_BUFFER_TYPE, DEFAULT_ENCODING_TYPE } from "../config"
import { readFileString, stringToBuffer } from "../util"

const encrypt = (data: string | Buffer, privOrPubKeyPath: string): string => {
    const key = readFileString(privOrPubKeyPath)
    const buffer = stringToBuffer(data)
    const encrypted = crypto.publicEncrypt(key, buffer)
    return encrypted.toString(DEFAULT_BUFFER_TYPE)
}

const decrypt = (
    data: string | Buffer,
    privateKeyPath: string,
    passphrase?: string | null
): string => {
    const key = readFileString(privateKeyPath)
    const buffer = stringToBuffer(data)
    const decrypted = crypto.privateDecrypt(
        {
            key: key,
            passphrase: passphrase || "",
        },
        buffer
    )
    return decrypted.toString(DEFAULT_ENCODING_TYPE)
}

export { encrypt, decrypt }
