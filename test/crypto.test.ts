import { Crypto, DefaultCryptoProvider, E2ECryptoProvider } from "../src"

// DefaultCryptoProvider
const key = "67rKmuc6DiDukE0jsUP421Eizo4CreaL6Q7Pg/NmH/s="
const iv = "FEFM9AY2m5jDq6GZ+CfLIA=="
const keyJsonFileValuesDefault = "./dummy/aes-256.json"
const keyJsonFileKeysDefault = "./dummy/aes-256.keys.json"

// E2ECryptoProvider
const PRIVATE_KEY_VALUE =
    "-----BEGIN RSA PRIVATE KEY----- MIIJKQIBAAKCAgEA0PfjoO54+QZui0EfssxGvHOm8bhDzQIIDcH/jUvN25E28MYF VOy1CgDk2n25eakhaaK8ogmP9PfczGpLalCGfVACCXNQFc60k6zjQY8lNY6DY2NJ 4qGR5OZsA2lhXgYtptqHCvGnqqIBpfYkddKzZOjQGZvUQ3XVZvEpkDuJGvPFW/+B 4NjsgSK0bJzygnJnbJYUHezBVRQynJRIxJmCZfuhqJM2w0FLB1/8TZVn9w3OC3DX avU7DfEGOlJb9evRrvdVGag14Pcy6SXoZ1jFscRJuXyWy1mLooTx6osj7V6VYhnK ZJrlRTAUxnGZLuBdqYztU7SNhZfmuCSIS+nduqrdM9P3NPqgOqmIMTps0fcQg0DU 5CFdWIy/FecErg1YaAhbEOqQO4QQlTmMDFFJ63Y9rE3s9W5k30ZP8Ydxa8UT3su3 6ePzUGzWXUu2M8ffc8nnfiAvh1XgJiBqDJkmVEG3GzmDL0BfDLqMnhBJ2UaQPXK9 w52masDgvHvyMEZoBaFBHtVICl4Jek6O9KSz1uWcR/+C72fBEU4iA/h4rdH4PVMT P99YhN+Zd4w9UM2tITafCM3RdNbKZ3f+oXfFCjqNKiJI/VSLkErOKQnw/AiGT8dp mmFGl+DazUsYNEP3ScFUAI+ZqsUyh5q9SoCnYmcpuMbXLRLVYQJQASkYwBkCAwEA AQKCAgEAljZ7NIX4A9pxwDxSEu7wsirYiM2SP14EeA9KKkGhewIJ4k4WKxP0l3pJ CB50I1ZGpG7M9hW1m7xIxdBq4cN8ybunmy9/FA4AlF8lBU1my/bjz5/hzr2h6E8S uekYisQaMOTJSj6n7eqDEM+9Kc0KE7GfValEjjG380XMQNfrGKq+5gDnVb/ZUoKl +6VeVhLy8YV4dIJp/0SDlTaqkFhg+fpGHK2mIflfe6+t5/9MOrV7tZGp6ELb7ouh lG77l+2qTwGP9N+Ly2km+Z28T/3qLn0RGfrLUuXNkEfMtnLKoqjo7Rno+SS3RmLn rDagjKfP7D9XomIZkTy+JwRrzVYRgf6lJWPGy55/No8cgGzUfxH75eAjM02mmBOo ns6lXk34wylnZlXBjXuwFagPi8Nzk96P0gRImUBWNjymXIcSwoTuPvR0op9RBXRV VU1qgDc5DtwlWbr7tKcr48ZoqRGM02ZKW3Qq+Vody5FG/P0keSRdYEPMAZ6udTRS TgZyd8sWUagg1/rULAgd/o111PlcwxwJVKJUOl9ZA9sCBwpgOe6+i3ko23jVOJIP phRDO+kn+p+6OR1k1XBybxGb0TaHmkIyN4QOPb0st3jIlCKkHNtexUrFBLZflB04 ohD0wI4VRuHsqEhr27OVXZ+l/vBBgplXUeVBgrIu57LKOWxwCGECggEBAPRp0+Dc yD7ouGW7maPf/rWCJqnRqrMhBuL7bv6tIPkQTo0KQ6V+B9WM2ku6wFAOKsS0tMDH fqLdmVvE1xrtnRarBFLPp8VtgNvBYh0rbwVAtLV4OUK2BYH/saidyUZHjtfJ5jDF 9XcFdQY9hlQrkvQaJ6oWSHz49qINBDCyr6qW7ieZ+1ozvjFuGbvVGjVoCgt7WY2G CKix5g3ruWgQeyjJqnzTJZPU9dn3fbm73rh1eYudk7u2OJP07N4cldhJ2LqhAonk oodGqOEz1LMNBDHU/ru/Oz03ESzlcimx86ZEmw5cwImQpbSLotWEv0+3qap9csQw WVhqp2YTSKUKQWUCggEBANrf534YattfDs913df4ttVK+s8Fd1pWJ3XrVEUZ2OY0 o6tyoAIoBLlzR4ITIyVaGbE4tpSvfhJWaBpRD4xDw2xsuR0xYmiq2Gq8F6FxCOT0 5eT43yistYifXwM2alQWh9bnNZXnVOhW/GcvcXCp1NqPiPKSQjJF0LPEamXJFNTR 2/r4fID62bhI34yPx7lgAzBKB/+KkHSM4rHZtHjp++md5So8527+p6oAfBxLICJ6 KJaDusgEreymYPwM6nkfe73IFbGj3pTqSBOq+XmMO2XnmXwHqrt8RULkhmjoWOFP UfyqW0k17/OCL2sdZxXv+lJkuLXDNELTWomAOMzdkqUCggEBAMLBqUHe6/mk+3ql OFIq5Q3BPgnHtpuyT4iDDfkF/+Y3JkCg0zKF8Lwr1q7Nivy/rTi9PeL3lGM27UMA 4N7mRGyRrYpHScq57RovSH0x5O9slhKcUBRmcpEaLHjN8lp8Hsi4ayKmO2iyAoQM doOPjTPRu5V+2BgtUmnisVoUqIHobrFDs9Q2svE0aHER6CZyVr67daqeCTxTNZwW H9FagKkJuT5qCeF4qscavSZJG7okccvcrqG/G+paGn0KjiShA4ADWMCEXTYqCdwZ rv1V++exb6IvSYcH4DnEQ2oSELKGrH+PTSTRDBmHwyMc+k0NbrcZ61+Fn0wjAG0I JLTOLTkCggEAJyJ9u7gV8x9uAH4sql8YIc8ERVvO2WIqMBVhvfE/LPoggZk/LuOE 5LvN/134nMcdbOidDLzMJ+83Me1ogEXlfU97UdLwq5JQm9UBzKXvVzDKokQ1cope 8wy76lEideKJa01v8VupfNmAy9pZyDE1k9ayP90S5PZCuMHX3Fc12E+lq5wedtlj cGXnQrS6m1SlfU7fWzulVJGUPwSUFkKP/ldzEDhPkTMLO4RWrKBqIIADHdZz4Sul BXlCQg71Ja8Rav+JkXehZrL1LD8X2DnQrQnaEak1R8ySfcFqnvtcWPzbxfeX1uFE BCA05kwdkHiWI4FK3YUHpSMxPwCkJ00+2QKCAQBnhfyW5gpdCzUwEMyjfFaKHbpD 9GX9Ad0zDAwVrY/1uPPhGZI7FbA3qvMAEpMnUuAgEpTd219EMv9tSfgZJYPV2l6K HB1Bbz7TGs2mMS9mjTBpu/rY1g8mX81ZBkynwFOSLPxS3COpsHZfh7LzWuVVOKrc hUMT2TCozpuXVUEghsiPoyO7f0x/lpf8u13m636S0CsXxOJkvIn3mPNLiOpa+egg abrtJiqlAQZKOeO8AUDTKpFBoKDhfwdVNwjg5AgKgQnIvxjQTmTOttniokCECg3P pTnSGaIPt739ZVVTh+ENOvxMGoh5JGJlwAuRfS+98NHSrFDh+UWW9Nin4aPf -----END RSA PRIVATE KEY-----"
const PUBLIC_KEY_VALUE =
    "-----BEGIN PUBLIC KEY----- MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0PfjoO54+QZui0EfssxG vHOm8bhDzQIIDcH/jUvN25E28MYFVOy1CgDk2n25eakhaaK8ogmP9PfczGpLalCG fVACCXNQFc60k6zjQY8lNY6DY2NJ4qGR5OZsA2lhXgYtptqHCvGnqqIBpfYkddKz ZOjQGZvUQ3XVZvEpkDuJGvPFW/+B4NjsgSK0bJzygnJnbJYUHezBVRQynJRIxJmC ZfuhqJM2w0FLB1/8TZVn9w3OC3DXavU7DfEGOlJb9evRrvdVGag14Pcy6SXoZ1jF scRJuXyWy1mLooTx6osj7V6VYhnKZJrlRTAUxnGZLuBdqYztU7SNhZfmuCSIS+nd uqrdM9P3NPqgOqmIMTps0fcQg0DU5CFdWIy/FecErg1YaAhbEOqQO4QQlTmMDFFJ 63Y9rE3s9W5k30ZP8Ydxa8UT3su36ePzUGzWXUu2M8ffc8nnfiAvh1XgJiBqDJkm VEG3GzmDL0BfDLqMnhBJ2UaQPXK9w52masDgvHvyMEZoBaFBHtVICl4Jek6O9KSz 1uWcR/+C72fBEU4iA/h4rdH4PVMTP99YhN+Zd4w9UM2tITafCM3RdNbKZ3f+oXfF CjqNKiJI/VSLkErOKQnw/AiGT8dpmmFGl+DazUsYNEP3ScFUAI+ZqsUyh5q9SoCn YmcpuMbXLRLVYQJQASkYwBkCAwEAAQ== -----END PUBLIC KEY-----"
const privatePublicJsonFileValuesDefault = "./dummy/private-public.json"
const privatePublicJsonFileKeysDefault = "./dummy/private-public.keys.json"
const privateKeyPath = "./dummy/private-key.pem"
const publicKeyPath = "./dummy/public-key.pem"

// Text
const TEXT = `Hello World and Then...!`

test("test: Default Encryption From Values", () => {
    const provider = Crypto.newInstance(
        new DefaultCryptoProvider({
            key: key,
            iv: iv,
        })
    )

    const encrypted = provider.encrypt(TEXT)
    const decrypted = provider.decrypt(encrypted)
    expect(decrypted).toBe(TEXT)
})

test("test: Default Encryption with Hello World", () => {
    const data = "Hello World"
    const provider = Crypto.newInstance(
        new DefaultCryptoProvider({
            key: key,
            iv: iv,
        })
    )

    const encrypted = provider.encrypt(data)
    const decrypted = provider.decrypt(encrypted)
    const decrypted2 = provider.decrypt("6Rkfueq+fT3vPgWTST1lXg==")
    expect(decrypted).toBe(data)
    expect(decrypted2).toBe(data)
})

test("test: Default Encryption From JsonFile Values", () => {
    const provider = Crypto.newInstance(
        new DefaultCryptoProvider({
            keyiVPath: keyJsonFileValuesDefault,
        })
    )

    const encrypted = provider.encrypt(TEXT)
    const decrypted = provider.decrypt(encrypted)
    expect(decrypted).toBe(TEXT)
})

test("test: Default Encryption From JsonFile Keys Path", () => {
    const provider = Crypto.newInstance(
        new DefaultCryptoProvider({
            jsonPath: keyJsonFileKeysDefault,
        })
    )

    const encrypted = provider.encrypt(TEXT)
    const decrypted = provider.decrypt(encrypted)
    expect(decrypted).toBe(TEXT)
})

test("test: E2E Encryption From Values", () => {
    const provider = Crypto.newInstance(
        new E2ECryptoProvider({
            publicKey: PUBLIC_KEY_VALUE,
            privateKey: PRIVATE_KEY_VALUE,
        })
    )

    const encrypted = provider.encrypt(TEXT)
    const decrypted = provider.decrypt(encrypted)
    expect(decrypted).toBe(TEXT)
})

test("test: E2E Encryption From Files Values", () => {
    const provider = Crypto.newInstance(
        new E2ECryptoProvider({
            privateKeyPath: privateKeyPath,
            publicKeyPath: publicKeyPath,
        })
    )

    const encrypted = provider.encrypt(TEXT)
    const decrypted = provider.decrypt(encrypted)
    expect(decrypted).toBe(TEXT)
})

test("test: E2E Encryption From JsonFile Values", () => {
    const provider = Crypto.newInstance(
        new E2ECryptoProvider({
            jsonPath: privatePublicJsonFileValuesDefault,
        })
    )

    const encrypted = provider.encrypt(TEXT)
    const decrypted = provider.decrypt(encrypted)
    expect(decrypted).toBe(TEXT)
})

test("test: E2E Encryption From JsonFile Keys Path", () => {
    const provider = Crypto.newInstance(
        new E2ECryptoProvider({
            jsonPath: privatePublicJsonFileKeysDefault,
        })
    )

    const encrypted = provider.encrypt(TEXT)
    const decrypted = provider.decrypt(encrypted)
    expect(decrypted).toBe(TEXT)
})
