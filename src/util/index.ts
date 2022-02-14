import { DEFAULT_BUFFER_TYPE } from "../config"
import { readFileStringDefaultEncoding } from "./file.util"

const stringToBuffer = (data: string | Buffer): Buffer => {
    if (data instanceof Buffer) {
        return data
    } else {
        return Buffer.from(data, DEFAULT_BUFFER_TYPE)
    }
}

export { readFileStringDefaultEncoding as readFileString, stringToBuffer }
