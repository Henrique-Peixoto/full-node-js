import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = 3000;

type User = {
  id: number;
  name: string;
  email: string;
}

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

const users: User[] = [
  { id: 1, name: 'user 1', email: 'user1@email.com'},
  { id: 2, name: 'user 2', email: 'user2@email.com'}
];

function sendJson<T>(res: ServerResponse, statusCode: number, body: ApiResponse<T>): void {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const method = req.method ?? "GET";
  const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`);
  const pathName = requestUrl.pathname;

  if (method === "GET" && pathName === "/") {
    sendJson(res, 200, {
      success: true,
      message: "server is running",
      data: {
        routes: ["GET/users"]
      }
    });
    return;
  }

  if (method === "GET" && pathName === "/users") {
    sendJson(res, 200, {
      success: true,
      message: "Users fetched!",
      data: users
    });
    return;
  }

  sendJson<null>(res, 404, {
    success: false,
    message: "Route not found!",
    error: `${method} ${pathName} does not exist!`
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
