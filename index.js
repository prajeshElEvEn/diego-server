const express = require("express");
const cors = require("cors");
const { log, warn } = require("logggger");
const { errorMiddleware } = require("./src/middlewares");
const { loadEnv } = require("./src/utils");

const cuurentEnv = loadEnv();
const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || "127.0.0.1";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// apis
// app.use("/api/users", )
// app.use("/api/projects", )
// app.use("/api/tasks", )
// app.use("/api/dashboard", )

// error middleware
app.use(errorMiddleware);

app.listen(port, hostname, async () => {
  warn(`Environment > ${cuurentEnv}`);
  log(`Server > http://${hostname}:${port}`);
});
