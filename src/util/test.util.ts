export const assertNotNullOrUndefined = (value: unknown, msg?: string) => {
    if (isNullOrUndefined(value)) {
        throw new Error(msg || "value is null or undefined")
    }
}

export const assertNotNullOrUndefinedOrEmpty = (
    value: unknown,
    msg?: string
) => {
    if (isNullOrUndefinedOrEmpty(value)) {
        throw new Error(msg || "value is null or undefined or empty")
    }
}

export const isNullOrUndefined = (value: unknown): boolean => {
    return value === null || value === undefined
}

export const isNullOrUndefinedOrEmpty = (value: unknown): boolean => {
    return isNullOrUndefined(value) || value === ""
}
