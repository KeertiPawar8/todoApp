const express = require("express");
const app = express();
const db = require("./models/index");
const {authenticate} = require("./middlewares/authenticate")
const {userRouter} = require("./controllers/user.routes")
const {taskRouter} = require("./controllers/Tasks.routes")
require("dotenv").config();
app.use(express.json());

app.use("/",userRouter)

    app.use(authenticate)

app.use("/",taskRouter)

    db.sequelize.sync().then(() => {
        app.listen(3001, () => {
          console.log("server started");
        });
      });