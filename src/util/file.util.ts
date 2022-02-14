import * as fs from "fs"
import * as path from "path"
import { DEFAULT_ENCODING_TYPE } from "../config"

export const readFileStringDefaultEncoding = (
    relativeFilePath: string
): string => {
    const absolutePath = path.resolve(relativeFilePath)
    return fs.readFileSync(absolutePath, DEFAULT_ENCODING_TYPE)
}
