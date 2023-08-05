module.exports = (sequelize,Datatypes)=>{

    const theTasks = sequelize.define("Tasks",{
    
   task:{type:Datatypes.STRING,allowNull:false},
   description:{type:Datatypes.STRING,allowNull:false},
   status: {  type: Datatypes.BOOLEAN, defaultValue: false},
   duedate:{type:Datatypes.DATE,allowNull:false},
    userID: {type:Datatypes.INTEGER,
    references:{
        model:"Users",
        key:"id"
    }
    }
    
    })
    return theTasks
    }