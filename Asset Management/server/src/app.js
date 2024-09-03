const express = require("express");
const morgan = require("morgan");
const httpError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = express();
const cors = require("cors");
const { errorResponse } = require("./controllers/responseController");
const userRouter = require("./routes/userRoute");
const seedRouter = require("./routes/seedRoute");
const categoryRouter = require("./routes/categoryRoute");
const assetRouter = require("./routes/assetRoute");
const authRouter = require("./routes/authRoute");

app.use(cookieParser());
// app.use(express.static());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(morgan('dev'));

app.use("/api/user", userRouter);
app.use("/api/seed", seedRouter);
app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/asset", assetRouter);

app.get("/", (req, res) => {
  res.send("<h1>welcome to the server</h1>");
});

app.use((req, res, next) => {
  next(httpError(404, "route not found"));
});

app.use((err, req, res, next) => {
  return errorResponse(res, { statusCode: err.status, message: err.message });
});

module.exports = app;
