var sodium = require("sodium-native")


// set up a signing key pair
var alicePublicSigningKey = sodium.sodium_malloc(sodium.crypto_sign_PUBLICKEYBYTES)
var alicePrivateSigningKey = sodium.sodium_malloc(sodium.crypto_sign_SECRETKEYBYTES)

// zero the memory - just in case it's got junk in it
sodium.sodium_memzero(alicePublicSigningKey)
sodium.sodium_memzero(alicePrivateSigningKey)

// create the key pair 
sodium.crypto_sign_keypair(alicePublicSigningKey, alicePrivateSigningKey)

// log out the size of the keys
console.log(`alice public key is: ${alicePublicSigningKey.toString('base64')}`)
console.log(`alice private key is: ${alicePrivateSigningKey.toString('base64')}`)

// hash a message (using lib sodium) in order to sign it
var message = "Alice is not Satoshi Nakamoto"

var messageHash = sodium.sodium_malloc(sodium.crypto_hash_sha256_BYTES)
sodium.sodium_memzero(messageHash)

sodium.crypto_hash_sha256(messageHash, Buffer.from(message))

console.log(`message hash is: ${messageHash.toString('base64')}`)
