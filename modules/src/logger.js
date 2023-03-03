const dayjs = require("dayjs");

const logger = {
  info: (...messages) =>
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"), "[INFO]", ...messages),
  warn: (...messages) =>
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"), "[WARN]", ...messages),
  error: (...messages) =>
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"), "[ERROR]", ...messages),
};

module.exports = logger;
