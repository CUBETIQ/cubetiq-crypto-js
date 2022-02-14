import * as crypto from "crypto"
import {
    DEFAULT_AES_ALGORITHM,
    DEFAULT_BUFFER_TYPE,
    DEFAULT_ENCODING_TYPE,
} from "../../config"
import { bufferToString, stringToBuffer } from "../../util"

const encrypt = (
    data: string | Buffer,
    key: string | Buffer,
    iv?: string | Buffer | null
): string => {
    const cipher = crypto.createCipheriv(
        DEFAULT_AES_ALGORITHM,
        stringToBuffer(key),
        stringToBuffer(iv || key)
    )
    const _data = bufferToString(data)
    let encrypted = cipher.update(
        _data,
        DEFAULT_ENCODING_TYPE,
        DEFAULT_BUFFER_TYPE
    )
    encrypted += cipher.final(DEFAULT_BUFFER_TYPE)
    return encrypted
}

const decrypt = (
    data: string | Buffer,
    key: string | Buffer,
    iv?: string | Buffer | null
): string => {
    const decipher = crypto.createDecipheriv(
        DEFAULT_AES_ALGORITHM,
        stringToBuffer(key),
        stringToBuffer(iv || key)
    )
    const _data = bufferToString(data)
    let decrypted = decipher.update(
        _data,
        DEFAULT_BUFFER_TYPE,
        DEFAULT_ENCODING_TYPE
    )
    decrypted += decipher.final(DEFAULT_ENCODING_TYPE)
    return decrypted
}

export { encrypt, decrypt }
