require("express-async-errors");
require("reflect-metadata");
const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./routes/users/user.router");

const { errorHandle } = require("./errors/AppError");

mongoose.connect("mongodb://127.0.0.1:27017/databaseEstoque", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/users", userRouter);

app.use(errorHandle);

database.on("error", console.error.bind(console, "connection error: "));

database.once("open", function () {
  console.log("Conectado ao mongoDB !");
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
