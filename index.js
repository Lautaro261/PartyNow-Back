const { conn } = require("./src/db");
const { PORT } = process.env || 4000;

const { startServer } = require("./src/app");

conn.sync({ force: true }).then(() => {
  startServer(PORT);
});



