// Build and reads file path
import path from "node:path";

// path.join uses the correct separator (slash or backslash) for the current OS
// it creates a path string, not the folder itself
// it also does not check whether the file exists or not

// process.cwd (current working directory): the folder from where the Node.s process was started
const projectRoot = process.cwd();
console.log(`CWD: ${projectRoot}`);

// We want to access the following path
// uploads/users/420/profile.photo.png
const userId = "420";
let fileName = "profile.photo.png";
const uploadFilePath = path.join(projectRoot, "uploads", "users", userId, fileName);
console.log(`Path: ${uploadFilePath}`)

// Getting the final part of the path
fileName = path.basename(uploadFilePath);
const fileExtension = path.extname(uploadFilePath);
const parentFolder = path.dirname(uploadFilePath);
console.log(`File name: ${fileName}`);
console.log(`Extension: ${fileExtension}`);
console.log(`Parent folder: ${parentFolder}`);