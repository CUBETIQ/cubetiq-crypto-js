import { randomUUID } from "crypto"
import { writeFileFromString } from "../src/util/file.util"

test("Write File from String", () => {
    const filePath = "./ignore/test.json"
    const fileContent = {
        key: randomUUID(),
        iv: randomUUID(),
    }
    writeFileFromString(filePath, JSON.stringify(fileContent))
})
