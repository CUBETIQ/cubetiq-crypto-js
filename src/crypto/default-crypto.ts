import * as crypto from "crypto"
import {
    DEFAULT_AES_ALGORITHM,
    DEFAULT_BUFFER_TYPE,
    DEFAULT_ENCODING_TYPE,
} from "../config"
import { stringToBuffer } from "../util"

const encrypt = (
    data: string,
    key: string | Buffer,
    iv?: string | Buffer | null
): string => {
    const cipher = crypto.createCipheriv(
        DEFAULT_AES_ALGORITHM,
        stringToBuffer(key),
        stringToBuffer(iv || key)
    )
    let encrypted = cipher.update(
        data,
        DEFAULT_ENCODING_TYPE,
        DEFAULT_BUFFER_TYPE
    )
    encrypted += cipher.final(DEFAULT_BUFFER_TYPE)
    return encrypted
}

const decrypt = (data: string, key: Buffer, iv?: Buffer | null): string => {
    const decipher = crypto.createDecipheriv(
        DEFAULT_AES_ALGORITHM,
        stringToBuffer(key),
        stringToBuffer(iv || key)
    )
    let decrypted = decipher.update(
        data,
        DEFAULT_BUFFER_TYPE,
        DEFAULT_ENCODING_TYPE
    )
    decrypted += decipher.final(DEFAULT_ENCODING_TYPE)
    return decrypted
}

export { encrypt, decrypt }
