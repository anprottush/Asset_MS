const app = require("./app");
const connectDB = require("./config/database");
const secretData = require("./secret");

const port = secretData.server.port;
const hostname = secretData.server.hostname;

app.listen(port, hostname, async () => {
  console.log(`server is running at http://${hostname}:${port}`);
  await connectDB();
});
