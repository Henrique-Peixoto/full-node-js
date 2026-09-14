import http, { IncomingMessage, ServerResponse } from "node:http";

type CreateUserBody = {
  name?: string;
  email?: string;
}

const PORT = 3000;
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const method = req.method ?? "GET";
  const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`);
  const pathName = requestUrl.pathname;

  res.setHeader("Content-Type", "text/plain");

  if (method === "POST" && pathName === "/users") {
    const chunks: Buffer[] = [];

    // The "data" event is going to run every time Node receives a new body chunk
    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const rawBody = Buffer.concat(chunks).toString("utf-8");

        if (!rawBody) {
          res.statusCode = 500;
          res.end("Requisition body is required!");
          return;
        }

        const body = JSON.parse(rawBody) as CreateUserBody;

        if (!body.name || !body.email) {
          res.statusCode = 400;
          res.end("'name' and 'email' are required fields!");
          return;
        }

        res.statusCode = 201;
        res.end(`User created! Name: ${body.name}, Email: ${body.email}`);
      } catch {
        res.statusCode = 500;
        res.end("Unexpected error!");
      }
    });

    req.on("error", () => {
      res.statusCode = 500;
      res.end("Failed to read request body!");
    });

    return;
  }

  res.statusCode = 404;
  res.end("Route not found!");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
