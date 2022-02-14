/// <reference types="node" />
import { readFileToStringDefaultEncoding, readFileToJson } from "./file.util"
import {
    assertNotNullOrUndefined,
    assertNotNullOrUndefinedOrEmpty,
    isNullOrUndefined,
    isNullOrUndefinedOrEmpty,
} from "./test.util"
declare const stringToBuffer: (data: string | Buffer) => Buffer
declare const bufferToString: (data: string | Buffer) => string
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
