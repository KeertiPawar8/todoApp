
const express = require("express")
const userRouter = express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Users} = require("../models/index");

userRouter.post("/register",async(req,res)=>{
        
    const {name,email,password} = req.body;
      console.log(req.body)

const user = await Users.findOne({
    where: { email }
  });



     
  if(user){
    res.send({msg:"user already exist please login"})
}
else{

    try{
          bcrypt.hash(password,5,async(err,hash)=>{

            const data = await Users.create({ name,email,password:hash });
                 res.send("user has been registered")
          })

    }
    catch(err){
        res.send(err)
    }

}
 

    
 
    
    })
    


    userRouter.post("/login",async(req,res)=>{

        const {email,password} = req.body;
    
        const user = await Users.findOne({
            where: { email }
          });
    
        
         
        if(!user){
            res.send({msg: "user does not exist please signup"})
        }
        
        else{
          
            bcrypt.compare(password,user.password,(err,result)=>{
                     
                if(result){
                  
                    const token = jwt.sign({userID:user.id},process.env.JWT_SECRET)
    
                    res.send({token})
    
    
                }
                else{
                    res.send({msg:"wrong credentials"})
                }
    
    
            })
        }
    
    })


module.exports = {
    userRouter
};
