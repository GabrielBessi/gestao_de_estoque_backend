require("express-async-errors");
require("reflect-metadata");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const routerUser = require("./src/routes/users/user.router");
const routerProduct = require("./src/routes/products/product.router");

const { errorHandle } = require("./src/errors/AppError");

mongoose.connect("mongodb://127.0.0.1:27017/databaseEstoque", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/users", routerUser);
app.use("/products", routerProduct);

app.use(errorHandle);

database.on("error", console.error.bind(console, "connection error: "));

database.once("open", function () {
  console.log("Conectado ao mongoDB !");
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
