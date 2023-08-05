const express = require("express")
const taskRouter = express.Router();

const { Users,Tasks} = require("../models/index");

taskRouter.post("/Tasks", async (req, res) => {
    

    try {
      const data = await Tasks.create({ ...req.body });
  
      res.send({
        isError: false,
        msg:"Data has been added"
      });
    } catch (err) {
      res.status(404).json({
        isError: true,
        err,
      });
    }
  });






  taskRouter.get("/Tasks", async (req, res) => {
    try {
const idUser = req.body.userID; 

      Users.hasMany(Tasks, { foreignKey: "userID" });
      Tasks.belongsTo(Users, { foreignKey: "UserID" });

      const data = await Users.findAll({   include: [Tasks],where:{id:idUser}});
  
      res.send({
        isError: false,
        data,
      });
    } catch (err) {
      res.status(404).json({
        isError: true,
        err,
      });
    }
  });
  
  taskRouter.put("/Tasks/:id", async (req, res) => {
    try {
      const data = await Tasks.upsert({
        id: req.params.id,
        ...req.body,
      });
  
      res.send({
        isError: false,
        msg:"Data has been updated"    

      });
    } catch (err) {
      res.status(404).json({
        isError: true,
        err,
      });
    }
  });
  
  taskRouter.delete("/Tasks/:id", async (req, res) => {
    try {

  
      const data = await Tasks.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      res.send({
        isError: false,
        msg:"Data has been deleted"    
      });
    } catch (err) {
      res.status(404).json({
        isError: true,
        err,
      });
    }
  });

module.exports = {
    taskRouter
};


// "task":"learn coding",
// "description":"learn closures and destructuring",
// "duedate":"2022-01-05"