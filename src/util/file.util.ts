import * as fs from "fs"
import * as path from "path"
import { DEFAULT_ENCODING_TYPE } from "../config"

export const readFileToStringDefaultEncoding = (
    relativeFilePath: string
): string => {
    const absolutePath = path.resolve(relativeFilePath)
    return fs.readFileSync(absolutePath, DEFAULT_ENCODING_TYPE)
}

export const readFileToJson = (relativeFilePath: string): any => {
    return JSON.parse(readFileToStringDefaultEncoding(relativeFilePath))
}

export const writeFileFromString = (
    relativeFilePath: string,
    content: string
): void => {
    const baseDir = path.dirname(relativeFilePath)
    const absolutePath = path.resolve(relativeFilePath)

    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true })
    }

    fs.writeFileSync(absolutePath, content)
}
