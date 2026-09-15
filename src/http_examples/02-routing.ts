import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = 3000;
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const method = req.method ?? "GET";

  // http://localhost:3000/users?id=1 -> req.url: /users?id=1
  const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`);
  const pathName = requestUrl.pathname;
  res.setHeader("Content-Type", "text/plain");
  
  if (method === "GET" && pathName === "/health") {
    res.statusCode = 200;
    res.end("server is healthy");
    return;
  }

  if (method === "GET" && pathName === "/users") {
    res.statusCode = 200;
    res.end("List of users");
    return;
  }

  if (method === "POST" && pathName === "/users") {
    res.statusCode = 201; // 201: when creating something
    res.end("User created successfully");
    return;
  }

  res.statusCode = 404;
  res.end("Route not found");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});