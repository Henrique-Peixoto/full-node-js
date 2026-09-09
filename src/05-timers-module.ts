// After some delay
// Execute something at specific intervals, say every 2 seconds

// Common functions
// - settimeout
// - setinterval
// - cleartimeout
// - clearinterval
// - setimmediate

import { setTimeout as sleep } from "node:timers/promises";

function runSetTimeoutExample(): void {
  console.log("1");
  setTimeout(() => console.log("2"), 1000);
  console.log("3");
}

function runClearTimeoutExample(): void {
  const timerId = setTimeout(() => console.log("won't execute"), 2000);
  clearTimeout(timerId);
  console.log("4");
}

// setInterval: runs a callback repeatedly after the interval has passed
function runSetIntervalExample(): void {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 3) {
      clearInterval(intervalId);
      console.log("Count stopped!");
    }
  }, 500);
}

// setImmediate: runs after all synchronous code has finished.
function runSetImmediateExample(): void {
  setImmediate(() => console.log("setImmediate callback!"));
  console.log("After setImmediate callback!");
}

async function runPromiseTimerExample(): Promise<void> {
  console.log("Waiting for promise based timer");
  await sleep(5500);
  console.log("Promised based timer finished");
}

function runTimerDemo(): void {
  runSetTimeoutExample();
  runClearTimeoutExample();
  runSetIntervalExample();
  runSetImmediateExample();
}

runTimerDemo();
runPromiseTimerExample().catch((error: unknown) => {
  console.error("Timer based demo failed! Reason: ", error);
})