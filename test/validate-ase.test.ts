import { readFileToString, readFileToJson } from "./../src/util"

test("test: readFileToString", () => {
    const value1 = readFileToString("./dummy/ase-256-32.key")
    const value2 = readFileToString("./dummy/ase-256-16.key")

    expect(value1).toBe(
        "56773703de5fdbe4292749c2505b6059a6698aad7881065df0818442f7d559b2"
    )
    expect(value2).toBe("6ef348dd9b0b4f29e47f4f1c9d7b6255")
})

test("test: readFileToString with jsonFile key-paths", () => {
    const json = readFileToJson("./dummy/ase-256.keys.json")
    const value1 = readFileToString(json.keyPath)
    const value2 = readFileToString(json.ivPath)
    expect(value1).toBe(
        "56773703de5fdbe4292749c2505b6059a6698aad7881065df0818442f7d559b2"
    )
    expect(value2).toBe("6ef348dd9b0b4f29e47f4f1c9d7b6255")
})

test("test: readFileToString with jsonFile values", () => {
    const json = readFileToJson("./dummy/ase-256.json")
    const value1 = json.key
    const value2 = json.iv
    expect(value1).toBe(
        "56773703de5fdbe4292749c2505b6059a6698aad7881065df0818442f7d559b2"
    )
    expect(value2).toBe("6ef348dd9b0b4f29e47f4f1c9d7b6255")
})
