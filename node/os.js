const os = require("os");

console.table({
  "Total Memory": os.totalmem(),
  "Free Memory": os.freemem(),
  "CPU Cores": os.cpus().length,
  "CPU Model": os.cpus()[0].model,
  "OS Type": os.type(),
  "OS Release": os.release(),
  "System Uptime": os.uptime() / 3600,
});
