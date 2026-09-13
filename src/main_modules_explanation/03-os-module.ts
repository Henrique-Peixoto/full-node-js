// OS
// CPU info
// Memory info
// Home/temporary directories
import * as os from "node:os";

function runOsDemo(): void {
  console.log("platform", os.platform());
  console.log("CPU architecture", os.arch());
  console.log("OS type", os.type());
  console.log("OS release", os.release());
  console.log("Home directory", os.homedir());
  console.log("Temp directory", os.tmpdir());
  console.log("Total memory", os.totalmem()/(1024*1024*1024));
  console.log("Free memory", os.freemem()/(1024*1024*1024));
  
  const cpus = os.cpus();
  console.log("CPUs count", cpus.length);
  for (const cpu of cpus) {
    console.log(`
      Model: ${cpu.model}, 
      Speed: ${cpu.speed}, 
      Times: ${cpu.times}`
    );
  }
}

runOsDemo();