// Use cases:
// - User registered
// - Send a welcome email
// - Write a log
// - Notify some other service

// Emit one event -> listeners listen to this event and do something

// Most important ones:
// - .on() - register one listener
// - .once() - register one listener that runs only once
// - .emit() - triggers an event and sends to the listeners 

import EventEmitter from "node:events";

const appEvents = new EventEmitter();

type UserRegisterPayload = {
  id: number;
  email: string;
}

appEvents.on("user:registered", (user: UserRegisterPayload) => {
  console.log(`Email listener: welcome email sent to this user ${user.email}`);
});

appEvents.on("user:registered", (user: UserRegisterPayload) => {
  console.log(`Log listener: user ${user.id}, email ${user.email}`);
});

appEvents.once("app:started", () => {
  console.log("Once listener: app started");
});

function registerUser(): void {
  const user = {
    id: 1,
    email: "henrique@email.com"
  }

  console.log("User saved!");
  appEvents.emit("user:registered", user);
  console.log("Register user: event listeners completed!");
}

appEvents.emit("app:started");
appEvents.emit("app:started");

registerUser();