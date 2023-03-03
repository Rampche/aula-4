const { exec, spawn } = require("child_process");

exec("curl ipconfig.me", (err, stdout, stderr) => {
  if (err) {
    console.log("Error!".err.message);
    return;
  }
  console.log(stdout);
});
