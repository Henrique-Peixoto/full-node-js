// Buffers - raw binary data
// Binary data means - when data is stored in bytes

// Useful for
// - Reading files
// - Receiving HTTP request bodies
// - Working with streams
// - Handling images, PDF files, videos
// - Encrypting and hashing

// String: human readable text
// Buffer: raw bytes
const textBuffer = Buffer.from("Node");
console.log("Bufferd text: ", textBuffer);
console.log("Converted back text: ", textBuffer.toString("utf-8"));
console.log("Buffer length: ", textBuffer.length);

// Fixed size buffer
const fixedBuffer = Buffer.alloc(5);
console.log("Fixed size buffer: ", fixedBuffer);
fixedBuffer.write("API");
console.log("Fixed buffer after write: ", fixedBuffer);
console.log("Fixed buffer after write converted: ", fixedBuffer.toString("utf-8"));

const chunks = [
  Buffer.from("Hello "),
  Buffer.from("Node "),
  Buffer.from("JS")
];

const combinedBuffer = Buffer.concat(chunks);
console.log("Combined buffer: ", combinedBuffer);
console.log("Combined buffer as text: ", combinedBuffer.toString("utf-8"));
