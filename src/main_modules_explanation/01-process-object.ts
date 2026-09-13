import process from "node:process"

// env variables
const port = Number(process.env.PORT ?? 3000)

// commands
console.log(process.argv)
const command = process.argv[2] ?? "start"
const shouldFail = process.argv.includes("--fail")
const shouldCrash = process.argv.includes("--crash")


// Do not start any async task here
// Node is already shutting things down
// Ideal for logging or clean up routines
process.on("exit", (code) => {
  console.log(`Process finished with exit code ${code}`)
})

function runApp(): void {
  console.log({command,})

  if (shouldFail) {
    console.log("Manual failure triggered with --fail flag");
    process.exit(1);
  }

  if (shouldCrash) {
    console.log("Manual crash triggered with --crash flag");
    process.exit(1);
  }
}

runApp();