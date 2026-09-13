import crypto from "node:crypto"

// Built-in Node.js module
// Used for:
// - Security related tasks
// - Creating random UUID, IDs
// - Creating secure tokens
// - Hashing data
// - To verify whether data was tempered or not
// - Encrypt/decrypt

const requestId = crypto.randomUUID();
console.log(requestId);

// randomBytes
// - Password reset token
// - Email verification
// - Session secret, API keys
const resetToken = crypto.randomBytes(16);
const hexResetToken = resetToken.toString('hex');
console.log(`16 random bytes: ${resetToken.toString('ascii')}`);
console.log(`Converted to hex: ${hexResetToken}`);
console.log(`Length after convertion: ${hexResetToken.length}`)

// createHash
// 'hello' -> hash : possible
// hash -> 'hello' : impossible, hashing is a one-way operation
const text = "Hello, World!";
let hash = crypto
  .createHash("sha256")
  .update(text)
  .digest("hex");
console.log(`Hashed text: ${hash}`);
hash = crypto
  .createHash("sha256")
  .update(text)
  .digest("hex");
console.log(`Second hash: ${hash}`); // deterministic

// createHmac
// normal hash: data -> hash
// hmac: data + secret -> signed hash
// - webhook
// - signed tokens
const secret = "secret-key";
const message = "user_id=1";
const signature = crypto
  .createHmac("sha256", secret)
  .update(message)
  .digest("hex");

console.log(`HMAC Signature: ${signature}`);
