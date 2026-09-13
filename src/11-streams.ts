// Use cases:
// - Receive/send data chunk by chunk
// - To avoid loading all data at once
// - Read large files
// - Upload files
// - Downloading files
// - Video/audio processing
// - Compression

// Data is transmitted in chunks, ie.:
// - A 500MB file is transfered by transmitting chunk_1, chunk_2 and so on
// - It's more memory efficient

// Types of streams
// - Readable: source of data
// - Writable: destination where the data is written
// - Transform: read the data, modify it and pass it forward (compression, ie.)

import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

const readableStream = Readable.from([
  "hello ",
  "from ",
  "node.js ",
  "streams"
]);

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const text = chunk.toString();
    callback(null, text.toUpperCase());
  }
})

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log("Received chunk: ", chunk.toString());
    // This callback tells Node we're done with this chunk, so it should send
    // the next one
    callback();
  }
})

async function main(): Promise<void> {
  try {
    await pipeline(readableStream, uppercaseTransform, writableStream);
  } catch(error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Stream failed! ", msg);
  }
}

main();