// fs - file system

// create folders
// write files
// read files
// check file information
// delete files

// Important modules
// - sync apis: fs.readfilesync
// - callback apis
// - promise apis

// Use cases
// - Small startup scripts
// - Build scripts
// - Local demos

// Not good for
// - HTTP request handlers
// - High traffic APIs
// - Background jobs

import path from "node:path";
import fs from "node:fs";
import fsPromise from "node:fs/promises";

const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system', 'fs-demo');
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'sync-note.txt');
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'callback-note.txt');
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'promise-note.txt');

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
}

function runSyncExample(): FileResult {
  // write content to a file
  fs.writeFileSync(SYNC_FILE_PATH, "Created using sync fs", "utf-8");
  fs.appendFileSync(SYNC_FILE_PATH, "Appended using sync fs", "utf-8");
  const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8");
  const stats = fs.statSync(SYNC_FILE_PATH);

  return {
    style: "sync",
    content,
    fileName: path.basename(SYNC_FILE_PATH),
    sizeInBytes: stats.size
  }
}

function ensureDemoFolderExists(): void {
  if (!fs.existsSync(DEMO_FOLDER_PATH)) {
    fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
  }
}

// Check this callback hell out
function runCallbackExample(): Promise<FileResult> {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      CALLBACK_FILE_PATH,
      "created using callback fs",
      "utf-8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }

        fs.appendFile(
          CALLBACK_FILE_PATH,
          " Append using callback fs",
          "utf-8",
          (appendError) => {
            if (appendError) {
              reject(appendError);
              return;
            }

            fs.readFile(CALLBACK_FILE_PATH, "utf-8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }

              fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                if (statError) {
                  reject(statError);
                  return;
                }

                resolve({
                  style: "callback",
                  content,
                  sizeInBytes: stats.size,
                  fileName: path.basename(CALLBACK_FILE_PATH)
                })
              })
            })
          }
        )
      }
    )
  })
}

// Let's fix the callback hell above
async function runPromiseExample(): Promise<FileResult> {
  await fsPromise.writeFile(
    PROMISE_FILE_PATH,
    "Created using promise APIs",
    "utf-8"
  );

  await fsPromise.appendFile(
    PROMISE_FILE_PATH,
    " appended using promise API",
    "utf-8"
  );

  const content = await fsPromise.readFile(PROMISE_FILE_PATH, "utf-8");
  const stats = await fsPromise.stat(PROMISE_FILE_PATH);

  return {
    style: "promises",
    content,
    fileName: path.basename(PROMISE_FILE_PATH),
    sizeInBytes: stats.size
  }
}

async function main(): Promise<void> {
  try {
    ensureDemoFolderExists();
    const syncResult = runSyncExample();
    const callbackResult = await runCallbackExample();
    const promiseResult = await runPromiseExample();
    console.log([syncResult, callbackResult, promiseResult]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`File system error! ${message}`);
  }
}

main();