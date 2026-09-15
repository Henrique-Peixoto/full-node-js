import http, { type IncomingMessage, type ServerResponse } from "node:http";

// http.createServer: creates a low-level HTTP server
// The callback is going to run for every HTTP request

// req: request object
// res: response object

// Common HTTP methods:
// - GET: read data
// - POST: create data
// - PUT: replace data
// - PATCH: update partial data
// - OPTIONS: 
// - DELETE: delete data

// Headers: metadata sent by the client
const PORT = 3000;
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const userAgent = req.headers["user-agent"]; // the browser the client is using
  res.statusCode = 200;
  // This helps the client understand what data it's getting back
  res.setHeader("Content-type", "text/plain");
  // Without it, the client's requisition is going to hang
  res.end(`Data: method=${method}, url=${url}, userAgent=${userAgent}"`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});