module.exports = (sequelize,Datatypes)=>{

    const theUsers = sequelize.define("Users",{
        name:{type:Datatypes.STRING,allowNull:false},
        email:{type:Datatypes.STRING,allowNull:false},
        password:{type:Datatypes.STRING,allowNull:false},     
    })
    
    return theUsers
    
    }