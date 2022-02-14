import { DEFAULT_BUFFER_TYPE, DEFAULT_ENCODING_TYPE } from "../config"
import { readFileToStringDefaultEncoding, readFileToJson } from "./file.util"
import {
    assertNotNullOrUndefined,
    assertNotNullOrUndefinedOrEmpty,
    isNullOrUndefined,
    isNullOrUndefinedOrEmpty,
} from "./test.util"

const stringToBuffer = (data: string | Buffer): Buffer => {
    if (data instanceof Buffer) {
        return data
    } else {
        return Buffer.from(data, DEFAULT_BUFFER_TYPE)
    }
}

const bufferToString = (data: string | Buffer): string => {
    if (data instanceof Buffer) {
        return data.toString(DEFAULT_ENCODING_TYPE)
    } else {
        return data
    }
}

export {
    readFileToStringDefaultEncoding as readFileToString,
    readFileToJson,
    stringToBuffer,
    bufferToString,
    assertNotNullOrUndefined,
    assertNotNullOrUndefinedOrEmpty,
    isNullOrUndefined,
    isNullOrUndefinedOrEmpty,
}
