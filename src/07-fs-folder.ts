// fs - file system

// create folders
// write files
// read files
// check file information
// delete files

// sync apis: fs.readfilesync
// callback apis
// promise apis

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

const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system', 'fs-demo');
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'sync-note.txt');

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

async function main(): Promise<void> {
  try {
    ensureDemoFolderExists();
    const syncResult = runSyncExample();
    console.log([syncResult]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`File system error! ${message}`);
  }
}

main();