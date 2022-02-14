import { readFileToString, readFileToJson } from "./../src/util"

const key = "67rKmuc6DiDukE0jsUP421Eizo4CreaL6Q7Pg/NmH/s="
const iv = "FEFM9AY2m5jDq6GZ+CfLIA=="

test("test: readFileToString", () => {
    const value1 = readFileToString("./dummy/ase-256-32.key")
    const value2 = readFileToString("./dummy/ase-256-16.key")

    expect(value1).toBe(key)
    expect(value2).toBe(iv)
})

test("test: readFileToString with jsonFile key-paths", () => {
    const json = readFileToJson("./dummy/ase-256.keys.json")
    const value1 = readFileToString(json.keyPath)
    const value2 = readFileToString(json.ivPath)
    expect(value1).toBe(key)
    expect(value2).toBe(iv)
})

test("test: readFileToString with jsonFile values", () => {
    const json = readFileToJson("./dummy/ase-256.json")
    const value1 = json.key
    const value2 = json.iv
    expect(value1).toBe(key)
    expect(value2).toBe(iv)
})
