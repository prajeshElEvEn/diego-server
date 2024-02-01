const express = require("express");
const cors = require("cors");
const { log } = require("logggger");
const { errorMiddleware } = require("./src/middlewares");

const port = 5000;
const hostname = "127.0.0.1";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// apis
// app.use("/api/users", )
// app.use("/api/projects", )
// app.use("/api/tasks", )

// error middleware
app.use(errorMiddleware);

app.listen(port, hostname, () => {
  log(`Server running > http://${hostname}:${port}`);
});
