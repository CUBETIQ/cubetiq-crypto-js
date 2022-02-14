# CUBETIQ CryptoJS

-   Default Encryption
-   E2E Encryption

### How-to-use

-   Default Encryption Provider

```ts
const key = "67rKmuc6DiDukE0jsUP421Eizo4CreaL6Q7Pg/NmH/s="
const iv = "FEFM9AY2m5jDq6GZ+CfLIA=="
const text = "Hello World"
const provider = CryptoProvider.newInstance(
    new DefaultCryptoProvider({
        key: key,
        iv: iv,
    })
)

const encrypted = provider.encrypt(text)
const decrypted = provider.decrypt(encrypted)

// Output
console.log(text) // "Hello World"
console.log(decrypted) // "Hello World"
```

-   E2E Encryption Provider

```ts
const PRIVATE_KEY_VALUE = "-----BEGIN RSA PRIVATE KEY-----"
const PUBLIC_KEY_VALUE = "-----BEGIN RSA PUBLIC KEY-----"

const text = "Hello World"
const provider = CryptoProvider.newInstance(
    new E2ECryptoProvider({
        publicKey: PUBLIC_KEY_VALUE,
        privateKey: PRIVATE_KEY_VALUE,
    })
)

const encrypted = provider.encrypt(text)
const decrypted = provider.decrypt(encrypted)

// Output
console.log(text) // "Hello World"
console.log(decrypted) // "Hello World"
```

### Generate for Default Encryption (Key and IV)

```js
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)
```

### Generate for E2E Encryption (Public and Private Key)

```shell
openssl genrsa -out rsa_4096_priv.pem 4096
openssl rsa -pubout -in rsa_4096_priv.pem -out rsa_4096_pub.pem
```

### Contributors

-   Sambo Chea <sombochea@cubetiqs.com>
