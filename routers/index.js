/*
    Routers are responsible to document APIs
*/
const path = require("path");
const express = require("express");
const app = express();
const {router: TitleRouter} = require("./title-router");
const {
  create: createShow,
  findAll: findAllShow,
  updateOne: updateOneShow,
  deleteOne: deleteOneShow,
} = require("../controllers/show-controller");
const {router: AuthRouter} = require('./auth-router');

// Middleware
app.use(express.json());

// Routers
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("This is the root directory")
})

// Endpoints
app.use("/title", TitleRouter);

app.post("/shows", createShow);
app.get("/shows", findAllShow);

app.put("/shows/:id", updateOneShow);
app.delete("/shows/:id", deleteOneShow);

app.use(express.static("public"));

// Start server
app.listen(process.env.PORT, () => {
  console.log("Listening to...", process.env.PORT);
});
